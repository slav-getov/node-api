const http = require('http')
const fs = require('fs')

function rqListener(req, res){
    //req.url will capture the url the user used
    const url = req.url
    const method = req.method

    if(url === '/'){
        
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }else if(url=== '/message'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        fs.writeFileSync('node-day1/resp5.txt', 'dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
}
const server = http.createServer(rqListener)

server.listen(3000)