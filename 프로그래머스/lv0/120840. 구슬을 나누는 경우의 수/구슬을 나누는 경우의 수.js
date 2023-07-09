function solution(balls, share) {
    function factorial(num){
        if (num === 0 || num === 1){
            return 1
        }else{
            return num * factorial(num-1)
        }
    }
    if (balls < share){
        return 0
    }else{
        return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
    }
}