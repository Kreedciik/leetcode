const productExceptSelf = nums => {
   const answer = [];
   let prefix = 1, postfix = 1;

   for(const num of nums){
      answer.push(prefix);
      prefix *= num;
   }

   for(let i = nums.length - 1; i >= 0; i--){
      answer[i] *= postfix;
      postfix *= nums[i];
   }

   return answer;
}

// console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([-1,0,1,2,3]))
console.log(productExceptSelf([1,2,3,4]))

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]