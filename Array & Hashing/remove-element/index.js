const removeElement = (nums, val) => {
    let l = 0, r = 0;

    while(r < nums.length){
        if(nums[r] !== val){
            nums[l] = nums[r];
            l += 1;
        }
        r += 1;
    }

    return l;
}

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))