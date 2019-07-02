const { createServer } = require('http')
let server = createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" })
    response.write(`
        <h1>Hello!</h1>
        <p>Você está procurando por <code>${request.url}</code> </p>
    `)
    response.end()
})

server.listen(8888)
console.log("Servidor rodando na porta 8888")