// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operati

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    let prefix = 1;
    let suffix = 1;
    
    for (let i = 0; i < n; i++) {
      output[i] *= prefix;
      prefix *= nums[i];
      output[n - 1 - i] *= suffix;
      suffix *= nums[n - 1 - i];
    }
    
    return output;
  }
  