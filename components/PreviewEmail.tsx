import { renderToMjml } from "@luma-team/mjml-react";
import React, { useEffect, useState } from "react";

export const EmailPreview = ({
  emailComponent,
}: {
  emailComponent: React.ReactElement;
}) => {
  const [html, setHtml] = useState<string | null>(null);

  // We cannot import mjml-browser on the server side
  // because it relies on window
  useEffect(() => {
    const render = async () => {
      let mjml2html: (mjml: string, options: any) => { html: string };
      if (typeof window === "undefined") {
        // @ts-ignore
        const { default: _mjml2html } = await import("mjml-browser");
        mjml2html = _mjml2html;
      } else {
        // @ts-ignore
        const { default: _mjml2html } = await import("mjml-browser");
        mjml2html = _mjml2html;
      }

      const mjmlString = renderToMjml(emailComponent);

      const { html: _html } = mjml2html(mjmlString, {
        validationLevel: "soft",
        minify: false,
      });
      setHtml(_html);
    };

    render();
  }, [emailComponent]);

  return (
    <>
      {html ? (
        <div
          key={html}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      ) : (
        <div style={{ height: 235 }} />
      )}
    </>
  );
};
