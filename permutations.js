// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.



function permute(nums) {
    // If there is only one element in the array, return it as a 2D array
    if (nums.length === 1) {
        return [[nums[0]]];
    }
    
    let permutations = [];
    
    // Iterate through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Remove the current element from the array and generate permutations for the remaining elements
        let remaining = nums.slice(0, i).concat(nums.slice(i + 1));
        let subPermutations = permute(remaining);
        
        // Add the current element to the beginning of each sub-permutation
        for (let j = 0; j < subPermutations.length; j++) {
            permutations.push([nums[i], ...subPermutations[j]]);
        }
    }
    
    return permutations;
}
