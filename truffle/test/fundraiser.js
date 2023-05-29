const FundraiserContract = artifacts.require("Fundraiser");

contract('Fundraiser', accounts => {
  let fundraiser;
  const name = "Beneficiary name";
  const url = "beneficiaryname.org";
  const imageURL = "https://placekitten.com/600/350";
  const description = "Beneficiary description";
  const beneficiary = accounts[1];
  const custodian = accounts[0]

  describe("initialization", () => {
    beforeEach(async () => {
      console.log('name', name);
      fundraiser = await FundraiserContract.new(
        name,
        url,
        imageURL,
        description,
        beneficiary,
        custodian

      );
      console.log('contract ===== initialized');
    });

    it("gets the beneficiary name", async () => {
      const actual = await fundraiser.name()
      console.log(actual, 'beneficiary name');
      assert.equal(actual, name, "name should match");
    });
    it("gets the beneficiary url", async () => {
      const actual = await fundraiser.url();
      assert.equal(actual, url, "url should match");
    });
    it("gets the beneficiary image url", async () => {
      const actual = await fundraiser.imageURL();
      assert.equal(actual, imageURL, "imageURL should match");
    });
    it("gets the beneficiary description", async () => {
      const actual = await fundraiser.description();
      assert.equal(actual, description, "description should match");
    });
    it("gets the beneficiary account", async () => {
      const actual = await fundraiser.beneficiary();
      console.log(beneficiary, 'beneficiary wallet address');
      assert.equal(actual, beneficiary, "Beneficiary should match");
    });
    it("gets the custodian", async () => {
      const actual = await fundraiser.custodian();
      console.log(actual, 'custodian wallet address');
      assert.equal(actual, custodian, "Custodian should match");
    });
  });
});
