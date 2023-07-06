function solution(arr, query) {
    let array = arr.slice()
    for (let i = 0; i < query.length; i++){
        if (i % 2 === 0){ // 인덱스가 짝수
            array = array.slice(0, query[i] + 1)
        }else{ // 인덱스가 홀수
            array = array.slice(query[i])
        }
    }
    // console.log(array)
    return array;
}