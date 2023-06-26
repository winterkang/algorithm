function solution(s) {
    let number = [];
    const arr = s.split(' ')
    for (let i = 0; i < arr.length; i++){
        number.push(Number(arr[i]))
    }
    let answer = '';
    answer += String(Math.min(...number))
    answer += ' '
    answer += String(Math.max(...number))
    return answer;
}