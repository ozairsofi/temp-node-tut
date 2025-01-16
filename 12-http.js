const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }

    if (req.url === '/about') {
        res.end('This is our short history')
    }
    res.end(
        `
        <h1>OOPs!</h1>
        <p>we cant seem to find the page</p>
        <a href="/">Back Home</a>
        `)
})

server.listen(5000)