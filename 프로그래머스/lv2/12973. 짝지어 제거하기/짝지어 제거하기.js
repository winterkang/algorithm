function solution(s)
{
    let stack = []
    for (let i = 0; i < s.length; i++){
        stack.push(s[i])
        if (stack[stack.length - 1] === stack[stack.length - 2]){
            stack.pop()
            stack.pop()
        }
    }
    // console.log(stack)
    // if (!stack.length){
    //     return 1
    // }else if (stack.length % 2 !== 0){
    //     return 0
    // } else{
    //     return 0
    // }
    return (stack.length === 0) ? 1 : 0
}