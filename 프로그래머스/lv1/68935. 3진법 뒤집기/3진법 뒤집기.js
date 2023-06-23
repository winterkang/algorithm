function solution(n) {
    const array = [...(parseInt(n, 10).toString(3))].reverse().join('')
    return parseInt(array, 3);
}