function solution(babbling) {
    var answer = 0;
    const arr = ['aya', 'ye', 'woo', 'ma']
    for (let b of babbling){
        let speaking = 0
        for (let a of arr){
            if (b.indexOf(a) !== -1){ // 단어b에 a가 존재하면
                speaking += a.length // a길이를 더하고
            }
        }
        if (speaking === b.length){ // 단어 b의 반복이 끝나면 speaking과 b의 길이를 비교하여 계산
            answer++
        }
    }
    return answer;
} 