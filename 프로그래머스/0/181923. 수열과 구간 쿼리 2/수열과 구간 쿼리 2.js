function solution(arr, queries) {
    var answer = [];
    for(let i = 0; i < queries.length; i++){
        const [s, e, k] = queries[i]
        const numArr = arr.slice(s, e + 1)
        // console.log(numArr)
        let minArr = []
        for (let j = 0; j < numArr.length; j++){
            if (numArr[j] > k){
                minArr.push(numArr[j])
            }
        }
        // console.log(minArr)
        if (!minArr.length){
            answer.push(-1)
        }else{
            answer.push(Math.min(...minArr))
        }
    }
    // console.log(answer)
    return answer;
}