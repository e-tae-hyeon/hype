import Script from "next/script";
import React from "react";

type Props = {
  GA_ID: string;
};

function GAScript({ GA_ID }: Props) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
          page_path: window.location.pathname,
        });
        `,
        }}
      />
    </>
  );
}

export default GAScript;
