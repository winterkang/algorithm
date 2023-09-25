function solution(s) {
    const sArr = s.split('')
    const obj = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let cnt = 0
    for (let i = 0; i < sArr.length; i++){
        let stack = []
        let isValid = true
        for (let j = 0; j < sArr.length; j++){
            if(sArr[j] === '(' || sArr[j] === '{' || sArr[j] === '['){
                stack.push(sArr[j])
            }else{ // if문의 조건을 만족하지 못한 경우
                let openBracket = stack.pop()
                if (sArr[j] !== obj[openBracket]){
                    isValid = false
                    break
                }
            }
        }
        if (isValid && stack.length === 0){
            cnt++
        }
        const del = sArr.shift()
        sArr.push(del)
    }
    return cnt;
}
// console.log(solution('()('))