function solution(dots) {
    var answer = 0;
    let parallel = []
    const index = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
    // 기울기 : (y2-y1)/(x2-x1) 기울기가 동일하면 평행한다
    for (let i = 0; i < index.length; i++){
        const [a, b] = index[i]
        // console.log([a, b], dots[a], dots[b])
        current = (dots[b][1] - dots[a][1]) / (dots[b][0] - dots[a][0])
        parallel.push(current)
    }
    // console.log(parallel)
    let obj = {};
    for (let i = 0; i < parallel.length; i++){
        if (obj[parallel[i]]){
            obj[parallel[i]]++
        }else{
            obj[parallel[i]] = 1
        }
    }
    // console.log(obj)
    
    for (i in obj){
        if (obj[i] === 2 || obj[i] === 6){
            return 1
        }
    }
    return 0
}
// console.log(solution([[1, 1], [2, 2], [3, 3], [4, 4]]))