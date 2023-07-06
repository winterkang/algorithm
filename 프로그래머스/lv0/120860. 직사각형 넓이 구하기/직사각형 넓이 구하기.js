function solution(dots) {
    let xArr = []
    let yArr = []
    for (let i = 0; i < dots.length; i++){
        const [x, y] = dots[i]
        xArr.push(x)
        yArr.push(y)
    }
    const xResult = Math.max(...xArr) - Math.min(...xArr)
    const yResult = Math.max(...yArr) - Math.min(...yArr)
    return xResult * yResult;
}