var assert = require("assert");

describe("ResponseContents", function () {
  describe("hash", function () {
    it("should be a fixed length hash", function () {
      const git = require("git-rev-sync");
      var HASH = git.long();
      assert.equal(HASH.length, 40);
    });
  });

  describe("name", function () {
    it("should be the expected name", function () {
      var { name } = require("./package.json");
      assert.equal(name, "BoBTechChallenge");
    });
  });

  describe("version", function () {
    it("should be the correct version", function () {
      var { version } = require("./package.json");
      assert.equal(version, "1.0.0");
    });
  });
});
