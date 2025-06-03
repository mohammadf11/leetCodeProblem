function twoSum(nums: number[], target: number): number[] {
    let result:number[] = [];
    let find = false;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          console.log(`[${i},${j}]`);
          result.push(i);
          result.push(j);
          find = true;
        }
      }
      if(find)
          break;
    }
    return result;
  }

console.log(twoSum([1, 2, 3, 4, 5, 6], 9));
