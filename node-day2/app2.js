const http = require('http')

//custom
const {handler, work} = require('./server-handler')
console.log(work)

const server = http.createServer(handler)
server.listen(3000)