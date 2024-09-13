const longestConsecutive = nums => {
    const numSet = new Set(nums);
    let longest = 0;

    numSet.forEach(n => {
        if(!numSet.has(n - 1)){
            let length = 0;
            while(numSet.has(n + length)){
                length ++;
            }
            longest = Math.max(longest, length);
        }
    })

    return longest;
    
}

console.log(longestConsecutive([-7,-1,3,-9,-4,7,-3,2,4,9,4,-9,8,-7,5,-1,-7]));