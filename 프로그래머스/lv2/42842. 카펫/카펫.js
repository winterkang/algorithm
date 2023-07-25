function solution(brown, yellow) {
    const sum = brown + yellow
    let divisor = []
    // 연산수를 줄이기위해 제곱근 사용
    for (let i = 1; i <= Math.sqrt(sum); i++){
        if (sum % i === 0){
            divisor.push(i)
            if (i !== sum / i){ // i와 짝꿍인 수 찾기
                divisor.push(sum / i)
            }
        }
    }
    divisor.sort((a, b) => b - a)
    // console.log(divisor)
    let width, height;
    for (let i = 0; i < divisor.length; i++){
        width = divisor[i]
        height = sum / divisor[i]
        // 노란색 격자의 가로 길이 width - 2, 세로 길이 height - 2
        // 두 값의 곱이 yellow와 같다면 반환
        if ((width - 2) * (height - 2) === yellow){
            return [width, height]
        }
    }
}