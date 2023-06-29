function solution(s){
    var answer = true;
    let stack = []
    if (s[0] === ')'){
        return false
    }
    for (let i = 0; i < s.length; i++){
        const char = s[i]
        // console.log(char)
        if (char === '('){
            stack.push('(')
        }else if (stack.length && stack[stack.length - 1] === '('){
            stack.pop()
        }
        
    }
    if (stack.length !== 0){
        answer = false
        return answer
    }else return answer
}