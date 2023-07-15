function solution(nums) {
    var answer = 0;
    let arr = []
    const set = new Set(nums)
    // console.log(set)
    const len = nums.length / 2
    // console.log(len)
    if (len <= set.size){
        return len
    }else {
        return set.size
    }
}