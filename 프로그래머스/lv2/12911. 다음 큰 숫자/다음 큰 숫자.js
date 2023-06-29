function solution(n) {
    const nBinary = n.toString(2)
    const nCnt = [...nBinary].filter(item => item === '1').length
    // n보다 큰 자연수 & 2진수로 변환시 n의 갯수가 같을 것
    for (let i = n + 1; i <= 1000000; i++){
        const findNum = i.toString(2)
        const findCnt = [...findNum].filter(item => item === '1').length
        if (findCnt === nCnt){
            return i
        }
    }
}