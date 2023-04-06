function solution(arr) {
    let answer = 0;
    const len = arr.length
    let total = 0;
    for (a of arr){
        answer += a
    }
    total = answer/len
    return total;
}