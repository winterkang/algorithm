function solution(n) {
    const numInt = n.toString().split('') // 숫자를 문자열 배열로
    numInt.sort((a, b) => (a - b)) // 오름차순 정렬
    numInt.reverse() // 내림차순 정렬
    const numJoin = numInt.join('') 
    return parseInt(numJoin);
}