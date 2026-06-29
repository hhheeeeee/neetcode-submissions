class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
   hasDuplicate(nums) {
       let dict = {}
       let flag = false
       nums.map((i) => {
        if (Object.keys(dict).includes(String(i))) {
            flag = true
            return
        } else {
            dict[i] = 1
        }
       })
      return flag
    }
}
