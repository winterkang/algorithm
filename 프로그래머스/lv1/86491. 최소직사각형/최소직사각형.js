function solution(sizes) {
    let width = []
    let height = []
    for (let i = 0; i < sizes.length; i++){
        const [x, y] = sizes[i]
        width.push(Math.max(x, y))
        height.push(Math.min(x, y))
    }
    // console.log(Math.max(...width), Math.max(...height))
    return Math.max(...width) * Math.max(...height);
    
}