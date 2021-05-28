const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// IDが取得できない場合を想定する
const existsGaId = GA_ID !== '';

// PVを測定する
const pageview = (path: string): void => {
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
const event = ({ action, category, label, value = '' }: GaEvent): void => {
  if (!existsGaId) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};

export {
  GA_ID,
  existsGaId,
  pageview,
  event,
};