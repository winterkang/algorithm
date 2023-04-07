function solution(box, n) {
    let square = 1
    for (b of box){
        square *= parseInt(b / n)
    }
    return square;
}