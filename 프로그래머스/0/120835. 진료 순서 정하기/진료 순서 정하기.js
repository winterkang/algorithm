function solution(emergency) {
    var answer = [];
    const sorted = emergency.slice().sort((a, b) => b - a)
    // console.log(sorted)
    let obj = {}
    for (let i = 0; i < emergency.length; i++){
        obj[sorted[i]] = i + 1
    }
    // console.log(obj)
    for (let i = 0; i < emergency.length; i++){
        answer.push(obj[emergency[i].toString()])
    }
    return answer;
}