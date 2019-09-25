const Migrations = artifacts.require("Migrations");
const SimpleCounter = artifacts.require("SimpleCounter");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpleCounter);
};
