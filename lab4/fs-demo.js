const fs = require("fs");

fs.writeFileSync("message.txt", "Привіт, мій друже!");
const text = fs.readFileSync("message.txt", "utf8");

console.log(text);