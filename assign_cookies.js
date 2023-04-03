// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.


function findContentChildren(g, s) {
    // Sort the children's greed factor and cookie sizes in non-decreasing order
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
  
    let i = 0; // pointer for the child's greed factor
    let j = 0; // pointer for the cookie size
    let count = 0; // count of content children
  
    // Assign cookies to children
    while (i < g.length && j < s.length) {
      if (s[j] >= g[i]) {
        count++; // content child
        i++; // move to the next child's greed factor
      }
      j++; // move to the next cookie size
    }
  
    return count; // return the maximum number of content children
  }
  