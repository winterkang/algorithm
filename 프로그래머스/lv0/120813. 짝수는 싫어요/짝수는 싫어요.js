function solution(n) {
    let numbers = [];
    let odd = []
    for (let i = 1; i <= n; i++){
        // n이하의 수를 정렬 
        numbers.push(i)
    }
    for (num of numbers){
        // 홀수만 odd 배열에 push
        if (num % 2 !== 0){
            odd.push(num)
        }
    }
    return odd;
}