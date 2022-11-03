import http from "http";
import EventEmitter from "events";
const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("Usama");
});
event.on("sayMyName", () => {
  console.log("Khurshid");
});
event.on("sayMyName", () => {
  console.log("Sahib");
});
event.on("sayMyName", (statusCOde, mesg) => {
  console.log(`YOur status code is ${statusCOde} and the page is ${mesg}`);
});

event.emit("sayMyName", 200, "ok");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") res.end("Welcome to home page");
//   else if (req.url === "/about") res.end("Welcome to About page");
//   else {
//     res.writeHead(404, { "Content-type": "text/html" });
//     res.end("<h1>404 error. page not found </h1>");
//   }
// });

// server.listen(8000, "127.0.0.1", () => console.log("listening"));
