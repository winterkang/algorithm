function solution(n) {
    let answer = [];
    const array = n.toString().split('').reverse()
    for (arr of array){
        answer.push(parseInt(arr))
    }
    return answer;
}