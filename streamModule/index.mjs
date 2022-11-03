// import { checkPrimeSync } from "crypto";
import fs from "fs";
import http from "http";

const server = http.createServer();

server.on("request", (req, res) => {
  //1 way
  //   fs.readFile("streamModule/input.txt", (err, data) => {
  //     if (err) console.error(err);

  //     if (req.url === "/") res.end(data);
  //     else if (req.url === "/about") res.end("ABout page");
  //     else {
  //       res.writeHead(404, { "Content-type": "text/html" });
  //       res.end("404, page not found");
  //     }
  //   });

  //   2nd WAy
  //   const rstream = fs.createReadStream("streamModule/input.txt");
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => res.end());
  //   rstream.on("error", (err) => {
  //     console.error(err);
  //     res.end("file not found");
  //   });

  //3rd way

  const rstream = fs.createReadStream("streamModule/input.txt");

  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
