function solution(arr) {
    let array = arr.slice()
    const row = arr.length
    const col = arr[0].length
    // console.log(row, col) 
    if(row > col){
        for (let i = 0; i < row; i++){
            for (let j = 0; j < (row - col); j++){
                array[i].push(0)
            }
        }
        // console.log(array)
        return array
    }else if (row < col){
        const emptyArr = Array.from({length: (col)}, () => 0)
        // console.log(emptyArr)
        for (let i = 0; i < (col - row); i++){
            array.push(emptyArr)
        }
        return array
    }else {
        return array
    }
    // console.log(array)
}

// console.log(solution([[1, 1], [1, 1], [1, 1], [1, 1]]))
// [[1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0]]