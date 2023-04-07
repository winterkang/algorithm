function solution(numbers) {
    // 완전탐색
    let max = 0
    numbers.sort((a, b)=> (a - b))
    if ((numbers[0] * numbers[1]) > (numbers[numbers.length-1] * numbers[numbers.length-2])){
        max = numbers[0] * numbers[1]
    }else{
        max = numbers[numbers.length-1] * numbers[numbers.length-2]
    }
    return max
}