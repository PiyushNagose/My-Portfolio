let IS_PROD = true;

const server = IS_PROD
  ? "https://my-portfolio-backend-x15a.onrender.com"
  : "http://localhost:5000";

export default server;
