const proxy = require('http-proxy-middleware');
console.log(process.env.REACT_APP_SOBOT_URL);
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
