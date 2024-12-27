import http from "http";
const server = http.createServer((req, res) => {
  console.log("Request is received");

  if (req.url == "/") {
    res.write(`<html><body style="text-align:center;">
            <h1 style="color:green;">Jai Shri Ram</h1>
            <p>A computer science portal</p>
            </body></html>`);
    res.end();
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server started");
});

console.log("Jai Shri Krishna");
