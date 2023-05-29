const Fundraiser = artifacts.require("Fundraiser");

module.exports = function (deployer, accounts) {

  deployer.deploy(

    Fundraiser,
    "viktor",
    "url",
    "imageUrl",
    "description",
    "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
    "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"


  );


};
