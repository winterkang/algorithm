function solution(my_string) {
    let answer = '';
    for (str of my_string){
        if (str === str.toUpperCase()){ // str가 대문자라면
            answer += str.toLowerCase()
        }else {
            answer += str.toUpperCase()
        }
    }
    return answer;
}