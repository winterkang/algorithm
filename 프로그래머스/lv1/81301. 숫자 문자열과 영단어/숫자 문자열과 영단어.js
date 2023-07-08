function solution(s) {
    const obj = {
        'zero': '0',
        'one' : '1',
        'two' : '2',
        'three' : '3',
        'four' : '4',
        'five' : '5',
        'six' : '6',
        'seven' : '7',
        'eight' : '8',
        'nine' : '9'
        }

    const numStr = ['zero','one','two','three','four','five','six','seven','eight','nine']
    const num = ['0','1','2','3','4','5','6','7','8','9']
    const arr = s.split('')
    let answer = []
    let rest = ''
    for (let i = 0; i < arr.length; i++){
        if (!isNaN(parseInt(arr[i]))){
            answer.push(arr[i])
        }else{
            rest += arr[i]
            if (numStr.includes(rest)){
                answer.push(rest)
                rest = ''     
            }
         }
    }
    for (let i = 0; i < answer.length; i++){
        answer.splice(i, 1, answer[i])
        if (answer[i] !== '0' && !parseInt(answer[i])){
            answer.splice(i, 1, obj[answer[i]])
        }
    }
    return Number(answer.join(''));
}
// console.log(solution("1zerotwozero3"))
// console.log(solution("one00"))