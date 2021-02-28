const proxy = {
  "/api/*": {
    target: "http://localhost:3001",
    secure: false,
    changeOrigin: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "*",
      "Access-Control-Allow-Methods": "*",
    },
  },
};

module.exports = proxy;
