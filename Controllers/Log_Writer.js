const fs = require("fs");
const path = require("path");

const Log_Writer = (req, res, next) => {
  const logPath = path.join(__dirname, "../Logs/Request_logs.txt");

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const logEntry =
    `Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}   ` +
    req.method +
    "  " +
    req.ip +
    "  " +
    req.url +
    "\n";

  // Write log entry to the file
  fs.appendFile(logPath, logEntry, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });
  next();
};

module.exports = Log_Writer;
