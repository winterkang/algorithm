function solution(arr) {
    const row = arr.length
    const column = arr[0].length

    if (row === column){
        return arr
    }else if (row > column){
        for (let i = 0; i < arr.length; i++){
            while (arr[i].length !== row){
                arr[i].push(0)   
            }
        }
    }else if (row < column){
        for (let j = 0; j < column - row; j++){
            arr.push(Array(column).fill(0))
        }
    }
    return arr
}