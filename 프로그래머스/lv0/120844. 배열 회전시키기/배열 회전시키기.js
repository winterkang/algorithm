function solution(numbers, direction) {
    let answer = [];
    // right이면 마지막 숫자가 맨 앞으로 pop, unshift
    if (direction === 'right'){
        const lastOne = numbers.pop()
        numbers.unshift(lastOne)
    }else{    // left면 첫번째 숫자가 맨 뒤로 shift, push
        const firstOne = numbers.shift()
        numbers.push(firstOne)
    }
    return numbers;
}