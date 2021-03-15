const ronin = require("ronin-server");
const mocks = require("ronin-mocks");
const git = require("git-rev-sync");

var { version } = require("./package.json");
var { name } = require("./package.json");
var server = ronin.server();
var HASH = git.long();

// GET Response, send them to /health
server.get("/health", function (req, res) {
  res.json({
    gitHash: HASH, // Hash of the commit
    name: name, // app name
    version: version, // app version
  });

  res.end();
});

server.start();
