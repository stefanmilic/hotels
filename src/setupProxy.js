const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/hotels/',
    proxy({
      target: process.env.REACT_APP_SOBOT_URL,
      secure: false,
      changeOrigin: true,
    }),
  );
};
