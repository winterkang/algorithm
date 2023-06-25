function solution(A, B) {
    const arrA = A.split('')
    const arrB = B.split('')
    var answer = 0;
    if (A === B){
        return 0
    }else{
        for (let i = 0; i < arrA.length; i++){
            if (arrA.join('') === arrB.join('')){
                return answer
            }else{
                arrA.unshift(arrA.pop())
                answer += 1   
            }
        }
    }
    return - 1
}