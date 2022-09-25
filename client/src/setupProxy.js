const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api/myrest',
        createProxyMiddleware({
            target: 'http://localhost:4000',
            changeOrigin: true
        })
    )
}