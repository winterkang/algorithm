function solution(order) {
    var answer = 0;
    // 아메 4500 라떼 5000 아무거나 4500
    for (let i = 0; i < order.length; i++){
        if (order[i].includes('americano')){
            answer += 4500
        }else if (order[i].includes('latte')){
            answer += 5000
        }else if (order[i] === 'anything'){
            answer += 4500
        }
    }
    return answer;
}