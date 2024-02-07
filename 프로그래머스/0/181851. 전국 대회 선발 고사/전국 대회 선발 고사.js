function solution(rank, attendance) {
    var answer = 0;
    let newRank = []
    for (let i = 0; i < attendance.length; i++){
        if (attendance[i]){
            newRank.push(rank[i])
        }
    }
    const sorted = newRank.sort((a, b) => a - b)
    // 10000 × a + 100 × b + c
    answer = (10000 * rank.indexOf(sorted[0])) + (100 * rank.indexOf(sorted[1])) + rank.indexOf(sorted[2])
    return answer;
}