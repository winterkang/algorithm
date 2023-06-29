function solution(n) {
    
    let prev = 0
    let current = 1
    for (let i = 2; i <= n; i++){
        let next = (prev + current) % 1234567
        prev = current
        current = next
    }
    // console.log(1234567 % current)
    return current;
}