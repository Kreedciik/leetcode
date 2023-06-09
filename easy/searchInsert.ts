const searchInsert = (nums: number[], target: number): number => {
  if (target <= nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  if (target === nums[nums.length - 1]) return nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }

    if (target >= nums[i] && target <= nums[i + 1]) {
      return i + 1;
    }
  }

  return 0;
};
