const serverHandlerFunction = (req,res) =>{
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.write('<html>')
        res.write('<body><p>hey there</p><form action="/create-user" method="POST"><label for="user">username creation</label><input type="text" name="user"><button type="submit">Post it</button></form></body>')
        res.write('</html>')
        return res.end()
    }else if(url === '/users'){
        res.write('<html>')
        res.write('<body><ul><li>first item</li><li>second item</li><li>third item</li></ul></body>')
        res.write('</html>')
        return res.end()
    }else if(url === '/create-user'){
        console.log('in create user')
        const body = []
        req.on('data', (chunk)=>body.push(chunk))
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split('=')[1])
        })
    }
}

module.exports.handler = serverHandlerFunction
module.exports.work = 'work'