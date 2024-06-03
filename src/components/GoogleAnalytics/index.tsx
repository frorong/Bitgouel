"use client";

import Script from "next/script";
import * as gtag from "@/lib/gtag";

import React from "react";

export default function GoogleAnalytics() {
  gtag.useGtag();

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GA_ID}, {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
