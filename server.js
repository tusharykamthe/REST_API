
const http = require('http')
const app = require('./app')

const host = process.env.host
const port = process.env.port
// const server = http.createServer((res, req) => {
//     if (req.url == "/") {
//         res.write("hi")
//         res.end()
//     }    
// })

const server=http.createServer(app)
server.listen(port, () => {
    console.log(`server started on ${host}:${port}`)
})
