function solution(quiz) {
    var answer = [];
    for (let i = 0; i < quiz.length; i++){
        const math = quiz[i].split(' ')
        // console.log(math)
        if (math[1] === '+'){
            if (parseInt(math[0]) + parseInt(math[2]) === parseInt(math[4])){
                answer.push('O')
            }else{
                answer.push('X')
            }
        }else if (math[1] === '-'){
            if (parseInt(math[0]) - parseInt(math[2]) === parseInt(math[4])){
                answer.push('O')
            }else{
                answer.push('X')
            }
        }
    }
    // console.log(answer)
    return answer;
}