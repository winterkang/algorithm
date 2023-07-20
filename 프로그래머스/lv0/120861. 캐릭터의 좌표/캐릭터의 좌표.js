function solution(keyinput, board) {
    let result = [0, 0]
    const Xrange = Math.floor(board[0] / 2)
    const Yrange = Math.floor(board[1] / 2)

    for (let i = 0; i < keyinput.length; i++){
        if (keyinput[i] === 'left' && result[0] !== -Xrange){
            result[0] -= 1
        }else if (keyinput[i] === 'right' && result[0] !== Xrange){
            result[0] += 1
        }else if (keyinput[i] === 'up' && result[1] !== Yrange){
            result[1] += 1
        }else if (keyinput[i] === 'down' && result[1] !== -Yrange){
            result[1] -= 1
        }
    }
    return result
}
// console.log(solution(["left", "left", "left", "left", "right", "right", "right", "right"], [5,5]))
// 기대값 = [2,0]