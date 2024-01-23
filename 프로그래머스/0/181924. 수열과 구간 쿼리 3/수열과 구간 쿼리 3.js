function solution(arr, queries) {
    var answer = [];
    for (let i = 0; i < queries.length; i++){
        const [x, y] = queries[i]
        let temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
    }
    return arr;
}