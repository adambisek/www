const site = {
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3001"
      : process.env.SITE_ORIGIN || "https://sika.io",
  name: "sika.io",
  gauges_site_id: "GAUGES-XXX-DEMO",
  google_analytics_site_id: "GOOGLE-ANALYTICS-XXX-DEMO"
};

export default site;
