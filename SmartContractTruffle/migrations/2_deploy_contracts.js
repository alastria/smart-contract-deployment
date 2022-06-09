const Notarization = artifacts.require("Notarization");

module.exports = function(deployer) {
  deployer.deploy(Notarization);
};
