const baseUrl = "https://www.pvassociates.in";

export default function sitemap() {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/blog",
    "/services/itr-service",
    "/services/large-thrust-subsidy",
    "/services/startup-registration",
    "/services/logistic-subsidy",
    "/services/project-loan",
    "/services/statutory-service",
    "/services/tax-audit",
    "/services/gcc-subsidy",
    "/services/machine-loan",
    "/services/bank-audit",
    "/services/ipo-service",
    "/services/partnership-registration",
    "/services/internal-audit",
    "/services/opc-registration",
    "/services/msme-loan",
    "/services/working-capital",
    "/services/secured-loan",
    "/services/unsecured-loan",
    "/services/gst-service",
    "/services/llp-registration",
    "/services/mega-subsidy",
    "/services/msme-subsidy",
    "/services/company-registration",
    "/services/it-subsidy",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}