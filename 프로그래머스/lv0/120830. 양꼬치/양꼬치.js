function solution(n, k) {
    let answer;
    // answer 변수선언시 let을 사용하는 이유는 조건마다 값이 달라지기 때문
    if (n >= 10) {
        const cnt = parseInt(n / 10) // 몫을 구하고
        const food = n * 12000 // 양꼬치 가격
        const drink = (k-cnt) * 2000 // 음료 가격
        answer = food + drink // 양꼬치 + 음료
    } else {
        const food = n * 12000
        const drink = k * 2000
        answer = food + drink
    } 
    return answer;
}