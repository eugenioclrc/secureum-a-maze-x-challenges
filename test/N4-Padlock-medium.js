const { expect } = require('chai');

// run the test
// npx hardhat test ./test/N4-Padlock-medium.js
describe('CTF #4 Padlock', function () {
  before(async function () {
    [deployer] = await ethers.getSigners();

    const Challenge = await ethers.getContractFactory('N4Padlock');
    challengeInstance = await Challenge.deploy({ value: ethers.utils.parseEther('0.0001') });
    await challengeInstance.deployed();
  });

  it('Should recover all funds', async function () {
    // Your code goes here

    expect(await ethers.provider.getBalance(challengeInstance.address)).to.equal('0');
  });
});
