const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }

    else if (req.url === '/about') {
        res.end('This is our short history')
    }
    else {
        res.end(`
        <h1>OOPs!</h1>
        <p>we cant seem to find the page</p>
        <a href="/">Back Home</a>
        `)
    }
})

server.listen(5000, () => {
    console.log('Server Listening on port 5000....')
})

// Analyze the code and find the error
