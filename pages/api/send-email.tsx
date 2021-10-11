import { renderToMjml } from "@luma-team/mjml-react";
import type { NextApiRequest, NextApiResponse } from "next";
import mjml2html from "mjml";

import * as postmark from "postmark";
import { SimpleEmail } from "../../components/SimpleEmail";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, postmarkApiKey } = req.body;

  const postmarkClient = new postmark.ServerClient(postmarkApiKey);
  await postmarkClient.sendEmail({
    From: "support@lu.ma",
    To: email,
    Subject: "Beautiful Email",
    TextBody: "Example text body",
    HtmlBody: renderEmailToHtml(),
  });

  console.log("body", req.body);
  res.status(200).json({ name: "John Doe" });
}

const renderEmailToHtml = (): string => {
  const mjmlString = renderToMjml(<SimpleEmail />);
  const { html } = mjml2html(mjmlString, {
    validationLevel: "soft",
    minify: false,
  });
  return html;
};
