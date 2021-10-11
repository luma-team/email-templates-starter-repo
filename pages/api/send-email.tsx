import { renderToMjml } from "@luma-team/mjml-react";
import type { NextApiRequest, NextApiResponse } from "next";
import mjml2html from "mjml";

import * as postmark from "postmark";
import { SimpleEmail } from "../../components/SimpleEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) {
  const { email, postmarkApiKey } = req.body;

  try {
    const postmarkClient = new postmark.ServerClient(postmarkApiKey);
    await postmarkClient.sendEmail({
      From: "support@lu.ma",
      To: email,
      Subject: "Beautiful Email",
      TextBody: "Example text body",
      HtmlBody: renderEmailToHtml(),
    });

    res.status(200).json({ message: "Succeeded" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error.message || "Hmm, I'm not sure what happened..." });
  }
}

const renderEmailToHtml = (): string => {
  const mjmlString = renderToMjml(<SimpleEmail />);
  const { html } = mjml2html(mjmlString, {
    validationLevel: "soft",
    minify: false,
  });
  return html;
};
