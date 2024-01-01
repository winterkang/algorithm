function solution(n) {
    const arr = n.toString().split('')
    const sum = arr.reduce((a, b) => Number(a) + Number(b), 0)
    return sum;
}