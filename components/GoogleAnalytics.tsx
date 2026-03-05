'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Use environment variable or prop
  const GA_ID = measurementId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_ID) {
    console.warn('Google Analytics measurement ID not found');
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}




