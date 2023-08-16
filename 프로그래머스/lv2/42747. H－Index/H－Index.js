function solution(citations) {
    let cnt = 0
    const H = citations.sort((a, b) => b - a)
    for (let i = 1; i <= H.length; i++){
        H.forEach(item => {
            if (i <= item){
                cnt++
            }
        })
        if (i >= cnt){
            return cnt
        }
        cnt = 0
    }
}