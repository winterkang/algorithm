function solution(my_string, num1, num2) {
    let answer = ''
    // for문 돌려서 원래 글자는 새 배열에 추가
    // num1, num2는 서로 바꿔서 추가
    for (let i = 0; i < my_string.length; i++){
        if (i !== num1 && i !== num2){
            answer += my_string[i]
        }else if (i === num1){
            answer += my_string[num2]
        }else if (i === num2){
            answer += my_string[num1]
        }
    }
    return answer;
}