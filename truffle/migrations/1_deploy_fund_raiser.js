const Fundraiser = artifacts.require("Fundraiser");

module.exports = function (deployer) {
  deployer.deploy(

    Fundraiser,
    "viktor",
    "url",
    "imageUrl",
    "description"


  );


};
