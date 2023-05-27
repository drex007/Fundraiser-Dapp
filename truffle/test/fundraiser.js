const FundraiserContract = artifacts.require("Fundraiser");

contract('Fundraiser', accounts => {
  let fundraiser;
  const name = "Beneficiary name";
  const url = "beneficiaryname.org";
  const imageURL = "https://placekitten.com/600/350";
  const description = "Beneficiary description"

  describe("initialization", () => {
    beforeEach(async () => {
      console.log('name', name);
      fundraiser = await FundraiserContract.new(name);
      console.log('initialized');
    });

    it("gets the beneficiary name", async () => {
      const actual = await fundraiser.name()
      console.log(actual, '==============actual');
      assert.equal(actual, name, "name should match");
    })
  });
});
