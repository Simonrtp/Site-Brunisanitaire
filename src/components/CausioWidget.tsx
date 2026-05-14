import Script from "next/script";
import { CAUSIO } from "@/lib/constants";

/** Charge le widget Causio : config globale puis script hébergé chez causio.fr. */
export default function CausioWidget() {
  return (
    <>
      <Script id="causio-config" strategy="beforeInteractive">
        {`window.CAUSIO_CONFIG = { chatbotId: "${CAUSIO.chatbotId}" };`}
      </Script>
      <Script src={CAUSIO.scriptSrc} strategy="afterInteractive" />
    </>
  );
}
