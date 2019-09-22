const SimpleCounter = artifacts.require('SimpleCounter');
const util = require('ganache-time-traveler');


contract("SimpleCounter", accounts => {

    let contract;
    let snapshotId;

    before(async () => {
        contract = await SimpleCounter.new();
    })

    beforeEach(async () => {
        let snapshot = await util.takeSnapshot();
        snapshotId = snapshot.result
    })

    afterEach(async () => {
        await util.revertToSnapshot(snapshotId);
    })

    it('test counter', async () => {
        let count = await contract.counter.call();
        assert.equal(count.toNumber(), 0, '');
    });

    it('test increment()', async () => {
        await contract.increment();
        let count = await contract.counter.call();

        assert.equal(count.toNumber(), 1, 'count did not increment');
    });
});