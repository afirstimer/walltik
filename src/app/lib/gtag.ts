export const GA_MEASUREMENT_ID = "G-G40ZBWZD2L";

export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: any) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};