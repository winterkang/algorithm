function solution(emergency) {
    var answer = [];
    // 정렬 후 뒤집기 : sort는 원본 변경, slice를 이용해서 사본 생성
    const sortReverse = emergency.slice().sort((a, b) => a - b).reverse()
    for (let i = 0; i < sortReverse.length; i++){
        answer.push([sortReverse[i], i + 1])
    }
    // emergency를 반복돌려서 answer과 같은 경우에 새 배열에 추가
    let result = []
    for (let i = 0; i < emergency.length; i++){
        for (let j = 0; j < answer.length; j++){
            if (emergency[i] === answer[j][0]){
                result.push(answer[j][1])
            }
        }
    }
    return result;
}