function solution(answers) {
    const pattern1 = [1, 2, 3, 4, 5]
    const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let score = [0, 0, 0] // pattern1, pattern2, pattern3 각 점수
    for (let i = 0; i < answers.length; i++){
        if (answers[i] === pattern1[i % pattern1.length ]){
            score[0]++
        }
        if (answers[i] === pattern2[i % pattern2.length ]){
            score[1]++
        }
        if (answers[i] === pattern3[i % pattern3.length ]){
            score[2]++
        }
    }
    const max = Math.max(...score) // 가장 큰 수

    // 가장 많은 문제를 맞힌 사람
    let winners = [] 
    for (let i = 0; i < score.length; i++){ 
        if (score[i] === max){ // 가장 큰 수와 score[i]가 일치하면 
            winners.push(i + 1) 
            // i + 1 : 1번, 2번, 3번 총 3명의 수포자니까 인덱스에 + 1을 하여 push
        }
    }
    // 
    return winners;
}