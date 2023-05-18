import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Mz4CqVc1P7Gt_uBx0sovrzTIwMfR_duFOJL4MfkxL3AC3xvSLkBNAhT3WXx5y1PEZ01VqTivR2yfA-ShZ8HX__sRxaHrzUGc2BQPCM_q96ZPmifbPAmc9YFrCy7MY3Yx",
    accept: "application/json",
  },
});
