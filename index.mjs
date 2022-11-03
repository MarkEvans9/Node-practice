// const chalk = require("chalk");

import chalk from "chalk";
import fs from "fs";
// const fs = require("fs");
const a = false;
console.log(a ? chalk.green.inverse(a) : chalk.red.inverse(a));
// fs.writeFileSync("write.txt", "Hello my first file");
// fs.writeFileSync("write.txt", "Hello my first file.check it out");
// fs.appendFileSync("write.txt", " Created by usama");
// fs.renameSync("write.txt", "read.txt");
// fs.rmSync("read.txt");
// const data = fs.readFileSync("write.txt");
// console.log(data.toString());
// fs.mkdirSync("components");
// fs.writeFileSync("components/read.txt", "hey");
// fs.rmSync("components", { recursive: true, force: true });
// fs.writeFileSync("write.txt", (a = 5), (b = 6), console.log(a + b));
fs.readFile("./write.txt", "utf-8", (err, data) =>
  console.log(chalk.bgGray(data))
);
// console.log(chalk.green.inverse(a));
// console.log(a);
