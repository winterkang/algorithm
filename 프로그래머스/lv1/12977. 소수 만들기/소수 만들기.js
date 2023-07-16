function solution(nums) {
    let sum = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            for (let k = j + 1; k < nums.length; k++){
                sum.push(nums[i] + nums[j] + nums[k])
            }
        }
    } 
    // console.log(sum)
    let cnt = 0
    sum.forEach(item => {
        let prime = true
        for (let i = 2; i <= Math.sqrt(item); i++){
            if (item % i === 0){
                return false
            }
        }
        if (prime){
            cnt++
        }
    })
    return cnt
}