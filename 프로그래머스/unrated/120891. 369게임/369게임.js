function solution(order) {
    const arr = order.toString().split('').filter(x => x === '3' || x === '6' || x === '9').length
    return arr;
}