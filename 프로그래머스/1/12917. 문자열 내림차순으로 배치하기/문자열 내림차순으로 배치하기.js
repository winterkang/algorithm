function solution(s) {
    var answer = '';
    let upper = ''
    const sorted = s.split('').sort().reverse().join('')
    for (let i = 0; i < sorted.length; i++){
        if (sorted[i] === sorted[i].toUpperCase()){
            upper += sorted[i]
        }else{
            answer += sorted[i]
        }
    }
    // console.log(answer+upper)
    return answer+upper;
}