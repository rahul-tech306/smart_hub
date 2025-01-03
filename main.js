const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/worker', createProxyMiddleware({ target: 'http://localhost:2004', changeOrigin: true }));

app.use('/customer', createProxyMiddleware({ target: 'http://localhost:2006', changeOrigin: true }));

app.use('/enter', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

app.listen(3001, () => {
    console.log('Main server running on port 3001');
});
