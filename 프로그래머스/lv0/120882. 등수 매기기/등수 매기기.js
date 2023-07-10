function solution(score) {
    var answer = [];
    let obj = {}
    for (let i = 0; i < score.length; i++){
        const [a, b] = score[i]
        answer.push((a + b) / 2)
    }
    // console.log(answer)
    let array = answer.slice()
    const sorted = answer.sort((a, b) => a - b)
    // console.log(sorted)
    for (let i = 0; i < sorted.length; i++){
        // sorted.splice(i, 1, i + 1)
        obj[sorted[i]] = sorted.length - i
    }
    // console.log(obj)
    // console.log(answer)
    // console.log(array)
    let result = []
    for (let i = 0; i < array.length; i++){
        result.push(obj[array[i]])
        // console.log(array[i])
    }
    // console.log(result)
    return result;
}