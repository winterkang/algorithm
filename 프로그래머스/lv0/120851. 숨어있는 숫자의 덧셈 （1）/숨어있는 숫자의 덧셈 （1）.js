function solution(my_string) {
    let answer = 0;
    const num = ['1','2','3','4','5','6','7','8','9']
    // 숫자만 추출해서 새 배열에 추가
    for (str of my_string){
        if(num.includes(str)){
            answer += parseInt(str)
        }
    }
    return answer;
}