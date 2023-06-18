function solution(numbers, k) {
    let index = 0
    for (let i = 1; i < k; i++){
        index += 2
        if (numbers.length < index){
            index %= numbers.length
        }
    }
    return numbers[index];
}