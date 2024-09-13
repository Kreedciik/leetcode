// const twoSum = (nums, target) => {
//     const indices = [];
//     for(let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         for(let j = i + 1; j < nums.length; j++) {
//             if(num + nums[j] === target){
//                 indices.push(i, j);
//             }
//         }
//     }
//     return indices;
// }

const twoSum = (nums, target) => {
    const hash = new Map();
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        const sumIndex = hash.get(diff);
        if(hash.has(diff)) {
            return [sumIndex, i];
        }
        map.set(num, i);
    }
    return [];
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))