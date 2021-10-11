import * as snippet from "@segment/snippet";
import type { AppProps } from "next/app";
import Script from "next/script";
import ReactDOM from "react-dom";

import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css";
import { useIsMounted } from "../components/hooks/useIsMounted";
import "../styles/globals.css";

function renderSnippet() {
  const opts = {
    apiKey: "2PqnHBdT8XbhzAddB9rmBRNAvmZciLo7",
    page: true,
  };

  if (process.env.NODE_ENV === "development") {
    return snippet.max(opts);
  }

  return snippet.min(opts);
}

function MyApp({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted();
  return (
    <>
      <Script
        id="segment"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />

      <Component {...pageProps} />
      {isMounted &&
        ReactDOM.createPortal(
          <Toaster position="bottom-center" />,
          document.body
        )}
    </>
  );
}

export default MyApp;
