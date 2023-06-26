function solution(arr, queries) {
    var answer = [];
    for (let j = 0; j < queries.length; j++){
        const [s, e, k] = queries[j]
        let array = []
        for (let i = s; i <= e; i++){
            if (arr[i] > k){
             array.push(arr[i])   
            }
        }
        // console.log(array)
        if (array.length){
            answer.push(Math.min(...array))   
        }else{
            answer.push(-1)
        }
    }
    // console.log(answer)
    return answer;
}