function solution(numLog) {
    var answer = '';
    const obj = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10
    }
    for (let i = 0; i < numLog.length; i++){
        for (let [key, value] of Object.entries(obj)){
            const num = numLog[i + 1] - numLog[i]
            if (value === num) answer += key
        }
    }
    return answer;
}