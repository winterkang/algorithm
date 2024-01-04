function solution(myString) {
    var answer = '';
    const str = myString.toLowerCase()
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'a'){
            answer += 'A'
        }else{
            answer += str[i]
        }
    }
    console.log(answer)
    return answer;
}