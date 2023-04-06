function solution(array) {
    let answer = 0;
    const arr = array.toString().split('')
    for (a of arr){
        if (a === '7'){
            answer += 1
        }
    }
    return answer;
}