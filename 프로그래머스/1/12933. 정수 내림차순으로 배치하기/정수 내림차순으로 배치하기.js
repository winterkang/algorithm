function solution(n) {
    var answer = 0;
    const str = n.toString().split('')
    // console.log(str)
    const num = str.map(x => parseInt(x))
    // console.log(num)
    answer = Number(num.sort((a, b) => b - a).join(''))
    return answer;
}