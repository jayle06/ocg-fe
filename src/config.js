const isProductionEnv = process.env.NODE_ENV === "production";

export const API_DOMAIN = isProductionEnv
  ? "http://localhost:10000"
  : "http://localhost:10000";

export const BASE_URL = isProductionEnv ? "/vue3-online-shop/" : "/";

export const DOMAIN_TITLE = "Kayle Sneaker";