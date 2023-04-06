function solution(x) {
    var answer = true;
    let sum = 0
    let strSum = ''
    
    const xStr = x.toString().split('')
    for (xs of xStr){
        sum += parseInt(xs)
        strSum += xs
    }
    if (parseInt(strSum) % sum === 0){
        answer = true
    }else{
        answer = false
    }
    return answer;
}