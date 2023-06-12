function solution(arr) {
    if (!arr.includes(2)){ // 2가 없다면
        return [-1]
    }else{ // 2가 있다면
        const array = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1)
        return array
    }
}