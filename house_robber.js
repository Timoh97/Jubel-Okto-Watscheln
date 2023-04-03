//You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


function rob(nums) {
    if (nums.length === 0) { // if there are no houses, return 0
      return 0;
    } else if (nums.length === 1) { // if there is only one house, rob it and return its value
      return nums[0];
    }
  
    const dp = new Array(nums.length); // create a dynamic programming array to store the maximum amount that can be robbed up to each house
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
  
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]); // the maximum amount that can be robbed up to the current house is either the sum of the amount of money in the current house and the maximum amount that can be robbed up to the house two positions behind, or the maximum amount that can be robbed up to the previous house
    }
  
    return dp[nums.length - 1]; // return the maximum amount that can be robbed up to the last house
  }
  

