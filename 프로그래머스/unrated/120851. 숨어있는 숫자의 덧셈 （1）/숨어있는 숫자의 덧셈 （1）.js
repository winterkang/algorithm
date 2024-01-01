function solution(my_string) {
    const arr = my_string.split('')
    const arrNum = arr.filter(x => parseInt(x)).reduce((a, b) => parseInt(a) + parseInt(b), 0)
    
    return arrNum;
}