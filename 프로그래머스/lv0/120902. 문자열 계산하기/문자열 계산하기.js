function solution(my_string) {
    const str = my_string.split(' ')
    
    let stack = []
    let operator = 1
    for (let i = 0; i < str.length; i++){
        if (str[i] === '+'){
            operator = 1
        }else if (str[i] === '-'){
            operator = -1
        }else{
            stack.push(str[i] * operator)
        }
    }
    return stack.reduce((acc, cur) => acc + cur)
}