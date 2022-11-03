import fs from "fs";
import http from "http";
import requests from "requests";

const port = 8000;
const hostName = "127.0.0.1";
const homePage = fs.readFileSync("index.html", "utf-8");
const replaceValue = (file, val) => {
  let temperature = file.replace("{%tempVal%}", val.main.temp);
  temperature = temperature.replace("{%CityVal%}", val.name);
  temperature = temperature.replace("{%countryVal%}", val.sys.country);
  temperature = temperature.replace("{%minVal%}", val.main.temp_min);
  temperature = temperature.replace("{%maxVal%}", val.main.temp_max);
  //   temperature = file.replace("{%cityVal%}", val.name);
  //   temperature = file.replace("{%countryVal%}", val.sys.country);

  //   temperature = file.replace("{%minVal%}", val.main.temp_min);
  //   temperature = file.replace("{%maxVal%}", val.main.temp_max);
  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=262b9d3b8d56aef2d44e867ce383f8fe"
    )
      .on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const objData = [data];

        const dataToRender = objData
          .map((d) => replaceValue(homePage, d))
          .join("");

        res.write(dataToRender);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
        // console.log("end");
      });
  }
});

server.listen(port, hostName);
