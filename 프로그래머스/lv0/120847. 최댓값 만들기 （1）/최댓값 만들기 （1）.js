function solution(numbers) {
    let answer;
    const maxNum1 = Math.max(...numbers)
    const index = numbers.indexOf(maxNum1)
    const del = numbers.splice(index, 1)
    const maxNum2 = Math.max(...numbers)
    answer = maxNum1 * maxNum2
    return answer;
}