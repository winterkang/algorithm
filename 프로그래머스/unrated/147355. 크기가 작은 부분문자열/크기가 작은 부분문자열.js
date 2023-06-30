function solution(t, p) {
    const tArr = t.split('')
    const len = p.length
    let cnt = 0
    let arr = []
    for (let i = 0; i < tArr.length; i++){
        arr.push(tArr.slice(i, len + cnt))
        cnt++
    }
    const newArr = arr.filter(item => item.length === len)
    let total = 0
    for (let i = 0; i < newArr.length; i++){
        if (parseInt(p) >= parseInt(newArr[i].join(''))){
            total++
        }
    }
    console.log(total)
    return total;
}