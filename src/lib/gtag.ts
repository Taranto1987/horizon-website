export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific events for Castor website
export const trackWhatsAppClick = (productName?: string, source?: string) => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: productName ? `${source || 'unknown'}_${productName}` : source || 'unknown',
  });
};

export const trackCalculatorStart = () => {
  event({
    action: 'calculator_start',
    category: 'engagement',
    label: 'biotipo_calculator',
  });
};

export const trackCalculatorComplete = (result: string) => {
  event({
    action: 'calculator_complete',
    category: 'conversion',
    label: result,
  });
};

export const trackProductView = (productName: string) => {
  event({
    action: 'product_view',
    category: 'ecommerce',
    label: productName,
  });
};

export const trackChatBotInteraction = (action: 'open' | 'message_sent' | 'whatsapp_redirect') => {
  event({
    action: `chatbot_${action}`,
    category: 'engagement',
    label: 'sales_bot',
  });
};