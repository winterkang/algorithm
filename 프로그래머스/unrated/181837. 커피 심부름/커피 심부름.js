function solution(order) {
    var answer = 0;
    for (or of order){
        if(or === 'anything'){
            answer += 4500
        }else if (or.includes('americano')){
               answer += 4500
        }else if (or.includes('cafelatte')){
                answer += 5000
        }
    }
    return answer;
}