// scripts/check-coverage.js
const fs = require("fs");
const lcovParse = require("lcov-parse");

const lcovFile = "./coverage/lcov.info";

if (!fs.existsSync(lcovFile)) {
  console.log("0");
  process.exit(0);
}

lcovParse(lcovFile, (err, data) => {
  if (err) {
    console.log("0");
    process.exit(0);
  }
  const total = data.reduce((acc, file) => acc + file.lines.hit, 0);
  const totalLines = data.reduce((acc, file) => acc + file.lines.found, 0);
  const coverage =
    totalLines === 0 ? 0 : Math.round((total / totalLines) * 100);
  console.log(coverage);
});
