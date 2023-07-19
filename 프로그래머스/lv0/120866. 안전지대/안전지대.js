function solution(board) {
    const row = board.length // 행 길이
    const column = board[0].length // 열 길이
    // 행 길이와 열 길이에 맞춰 배열의 요소를 모두 true로 채우기
    const array = Array.from({length : row}, () => Array.from({length : column}, () => true))
    
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            if (board[i][j] === 1){
                array[i][j] = false
                if (i - 1 >= 0) array[i - 1][j] = false;
                if (i + 1 < row) array[i + 1][j] = false;
                if (j - 1 >= 0) array[i][j - 1] = false;
                if (j + 1 < column) array[i][j + 1] = false;
                if (i - 1 >= 0 && j - 1 >= 0) array[i - 1][j - 1] = false;
                if (i - 1 >= 0 && j + 1 < column) array[i - 1][j + 1] = false;
                if (i + 1 < row && j - 1 >= 0) array[i + 1][j - 1] = false;
                if (i + 1 < row && j + 1 < column) array[i + 1][j + 1] = false;
            }
        }
    }
    const countFalse = array.flat().filter(item => item === false).length
    return (row * column) - countFalse;
}