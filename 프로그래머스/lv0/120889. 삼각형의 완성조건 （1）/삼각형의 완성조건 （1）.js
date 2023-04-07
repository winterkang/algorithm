function solution(sides) {
    let answer = 0;
    // 가장 큰 수 구하고
    const max = Math.max(...sides)
    // 가장 큰 수 sides 배열에서 삭제
    sides.splice(sides.indexOf(max), 1)
    // 작은 두 수 더하기
    const sum = sides[0] + sides[1]
    // 조건문
    if (sum > max){
        answer = 1
    }else{
        answer = 2
    }
    return answer;
}
