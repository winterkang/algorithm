function solution(slice, n) {
    for (let pizzaCount = 1; pizzaCount <= n; pizzaCount++){
        if (slice * pizzaCount >= n) {
            answer = pizzaCount
            break
        } 
    }
    return answer;
}