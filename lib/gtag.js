// lib/gtag.js
export const GA_TRACKING_ID = 'G-5NR71QFT8C'

// PV 測定
export const pageview = (url) => {
  // GA_TRACKING_ID が設定されていない場合は、処理終了
  // if (!GA_TRACKING_ID) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}