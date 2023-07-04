function solution(polynomial) {
    const arr = [polynomial].join(' ').split(' ').filter(item => item !== '+')
    let x = 0
    let num = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i].includes('x')){ // 'x'가 포함되어 있는 경우
            if (arr[i] === 'x'){
                x += 1
            }else{ // x는 버리고 나머지 합쳐서 정수로 변환
               const xNum = [arr[i]].join('').split('').filter(item => item !== 'x')
               x += parseInt(xNum.join('')) 
            }
        }else{ // 숫자만 있는 경우
            num += parseInt(arr[i])
        }
    }
    // x가 0 또는 1인 경우, num이 0인 경우
    if (x === 1){
        if (num === 0){
            return `x`
        }
        return `x + ${num}`
    }else if (x === 0){
        return `${num}`
    }else if (num === 0){
        return `${x}x`
    }else if (x > 1){
        return `${x}x + ${num}`
    }
}
  