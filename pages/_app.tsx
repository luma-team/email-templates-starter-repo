import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom";

import type { AppProps } from "next/app";
import { useIsMounted } from "../components/hooks/useIsMounted";

function MyApp({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted();
  return (
    <>
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
