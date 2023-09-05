function solution(n, words) {
    var answer = [0, 0];
    let turn = 1
    for (let i = 1; i < words.length; i++){
        let player = i % n + 1
        if (words[i - 1].slice(-1) !== words[i][0]){ // 끝말잇기 실패
            answer = [player, turn]
            break
        }
        if (words.findIndex(item => words[i] === item) !== i){ // 중복 체크
            answer = [player, turn]
            break
        }
        if (player === n){
            turn++
        }
    }
    return answer;
}