// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function groupAnagrams(strs) {
    // Create a map to store the groups of anagrams
    let groups = new Map();
    
    // Iterate through each string in the array
    for (let i = 0; i < strs.length; i++) {
        // Sort the current string and use the sorted string as a key in the map
        let sorted = strs[i].split('').sort().join('');
        if (!groups.has(sorted)) {
            groups.set(sorted, []);
        }
        
        // Add the current string to the group of anagrams
        groups.get(sorted).push(strs[i]);
    }
    
    // Convert the map to an array of arrays and return it
    return Array.from(groups.values());
}
