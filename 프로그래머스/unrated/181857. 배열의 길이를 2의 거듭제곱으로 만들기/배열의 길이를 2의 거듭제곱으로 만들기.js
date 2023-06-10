function solution(arr) {
    if (arr.length === 0){
        return [0]
    }else if (arr.length === 1){
        return arr
    }
    for (let i = 1; i < arr.length; i++){
        if ((2 ** i) === arr.length){
            return arr
        }else if ((2 ** i) > arr.length){
            // console.log(2 ** i)
            const newArr = Array((2 ** i) - (arr.length)).fill(0)
            return arr.concat(newArr)
            break
        }
    }
}