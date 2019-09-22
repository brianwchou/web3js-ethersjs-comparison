pragma solidity >=0.4.21 <0.6.0;

contract SimpleCounter {
    uint256 public counter = 0;

    function increment() public {
        counter = counter + 1;
    }
}
