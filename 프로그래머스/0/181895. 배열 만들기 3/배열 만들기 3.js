function solution(arr, intervals) {
    var answer = [];
    for (let i = 0; i < intervals.length; i++){
        const [a, b] = intervals[i]
        // console.log(a, b)
        answer.push(...arr.slice(a, b + 1))
        
    }
    return answer;
}