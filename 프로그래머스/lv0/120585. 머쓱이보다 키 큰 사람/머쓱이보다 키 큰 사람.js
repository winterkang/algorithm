function solution(array, height) {
    let answer = 0;
    for (arr of array){
        if (arr > height) {
            answer += 1
        }
    }
    return answer;
}