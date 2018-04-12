const http = require('http');
const url = require('url');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer(function(request, response) {
    var url_parts = url.parse(request.url);
    const { method } = request;
    switch (url_parts.pathname) {
        case '/':
            display_root(url_parts.pathname, request, response)
            break;
        case '/usuarios':
            display_usuarios(url_parts.pathname, request, response)
            break;
        default:
            display_404(url_parts.pathname, request, response)
    }
    /* response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World\n'); */
});

function display_root(pathname, request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hola Root\n');
}

function display_usuarios(pathname, request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hola Usuarios\n');
}

function display_404(pathname, request, response) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write("<h1> 404 Not Found</h1>");
}

server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}`);
});