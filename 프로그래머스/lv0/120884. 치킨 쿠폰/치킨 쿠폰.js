function solution(chicken) {
    var answer = 0;
    let coupon = chicken
    let eaten;
    // console.log(`chicken 치킨의 수 : ${chicken}`)
    while(coupon >= 10){
        eaten = parseInt(coupon / 10)
        answer += eaten
        coupon = parseInt((coupon % 10) + eaten)
        // console.log(`eaten 쿠폰으로 먹은 치킨의 수 : ${eaten}`)
        // console.log(`coupon 가지고있는 쿠폰의 수 : ${coupon}`)
        // console.log(`answer 서비스 치킨의 수 : ${answer}`)
        // console.log('-------------------------------')
    }
    
    return answer;
}