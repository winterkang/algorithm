function solution(x, n) {
    var answer = [];
    if (x > 0){
        for (let i = x; i <= (x * n); i += x){
            answer.push(i)
        }    
    }else if (x < 0){
        for (let i = x; i >= (x * n); i += x){
            answer.push(i)
        } 
    }else if (x === 0){
        for (let i = 0; i <= n; i++){
            answer.push(0)
        }
    }
     
    return answer.slice(0, n);
}