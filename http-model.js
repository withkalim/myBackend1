const http = require("http");

const cars = [
{id:1, name: "mustang",model:1968},
{id:2, name: "supra",model:1972},
{id:3, name: "GRT-34",model:1980},
];

const server = http.createServer((req, res)=>{
    if(req.method === "GET" && req.url == "/cars"){
        res.end("This come from cars obj");
    }
})
const backendPort = 8000;
server.listen(backendPort, ()=>{
    console.log(`Server is on port ${backendPort}`);
}); 