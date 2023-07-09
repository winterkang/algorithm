function solution(chicken) {
    var answer = 0;
    let coupon = chicken
    let eaten;
    while(coupon >= 10){
        eaten = parseInt(coupon / 10)
        answer += eaten
        coupon = parseInt((coupon % 10) + eaten)
    }
    // console.log(eaten, coupon, answer)
    return answer;
}