function solution(arr) {
    const minIdx = arr.indexOf(Math.min(...arr))
    const array = arr.filter((_, index) => index !== minIdx)
    if (array.length){
        return array
    }else{
        return [-1]
    }
    
}