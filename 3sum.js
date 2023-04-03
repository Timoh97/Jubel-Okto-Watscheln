// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b); // Sort the array in non-descending order
    const n = nums.length;
    
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
        
        let j = i + 1;
        let k = n - 1;
        
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                
                // Skip duplicates
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    
    return result;
}
