function solution(s) {
    var answer = '';
    const arr = s.split(' ')
    // 짝수는 대문자, 홀수는 소문자
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (j % 2 === 0){
                answer += arr[i][j].toUpperCase() 
            }else{
                answer += arr[i][j].toLowerCase()
            }
        }
        if(i !== arr.length - 1){
            answer += ' '
        }
    }
    return answer;
}