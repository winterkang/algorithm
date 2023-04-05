function solution(cipher, code) {
    let answer = '';
    // code 값은 그대로 두고 i값이 1부터 1씩 증가
    for (let i = 1; i <= cipher.length; i++){
        if (i % code === 0){
            answer += cipher[i-1]      
        }
    }
    return answer;
}