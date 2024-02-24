const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;
      if(!value1 || !value2){
        res.writeHead(400,{"Content-Type":"text/plain"})
        res.end("The operation cannot be performed");
      }
      else if(parseInt(value1)<=0 || parseInt(value2)<=0){
        res.writeHead(400,{"Content-Type":"text/plain"})
        res.end("The operation cannot be performed");
      }
      else{
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end(`The result is ${parseInt(value1)**parseInt(value2)}`);
      }
      

      
    }); 
    }
});

module.exports = server;
      
