function solution(n) {
    let pizza = 6
    while(true){
        // pizza가 n으로 나누어 떨어지고(즉, 모든 사람이 같은 수의 조각을 먹을 수 있는 경우)
        // pizza가 6으로 나누어 떨어진다면(피자가 6조각 단위로 나눠진다면)
        if (pizza % n === 0 && pizza % 6 === 0) break
        pizza++
    }
    console.log(pizza) // 모두 같은 수의 피자 조각을 먹어야할 때 필요한 피자 판 수
    return pizza / 6 ;
}