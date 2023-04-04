function solution(money) {
    const ice = 5500
    let count = 0
    while (money >= ice){ // 가지고 있는 돈이 아메리카노 가격 보다 크거나 같은 경우
        count += 1 // count변수 1더해주기 
        money -= ice // 가지고 있는 돈 = 가지고 있는 돈 - 아메리카노 가격
    }
    return [count, money];
}