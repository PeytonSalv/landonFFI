'use client';

import Script from 'next/script';

interface AnalyticsProps {
  gtmId?: string;
  gaId?: string;
}

export default function Analytics({ gtmId, gaId }: AnalyticsProps) {
  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `,
            }}
          />
        </>
      )}

      {/* Facebook Pixel (optional) */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Add Facebook Pixel code here if needed
            // !function(f,b,e,v,n,t,s)
            // {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            // n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            // if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            // n.queue=[];t=b.createElement(e);t.async=!0;
            // t.src=v;s=b.getElementsByTagName(e)[0];
            // s.parentNode.insertBefore(t,s)}(window, document,'script',
            // 'https://connect.facebook.net/en_US/fbevents.js');
            // fbq('init', 'YOUR_PIXEL_ID');
            // fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, parameters);
  }
}

// Track phone calls
export function trackPhoneCall() {
  trackEvent('phone_call', {
    event_category: 'engagement',
    event_label: 'phone_call_clicked',
    value: 1
  });
}

// Track form submissions
export function trackFormSubmission(formType: string) {
  trackEvent('form_submission', {
    event_category: 'engagement',
    event_label: formType,
    value: 1
  });
}

// Track email clicks
export function trackEmailClick() {
  trackEvent('email_click', {
    event_category: 'engagement', 
    event_label: 'email_clicked',
    value: 1
  });
} 