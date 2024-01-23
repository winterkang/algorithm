function solution(numbers) {
    var answer = 0;
    const arr = Array.from({length: 10}, (_, i) => i)
    for (let i = 0; i < arr.length; i++){
        if (!numbers.includes(arr[i])){
            answer += arr[i]
        }
    }
    return answer;
}