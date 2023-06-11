function solution(arr, queries) {
    var answer = [];
    let array = arr.slice()
    for (let i = 0; i < queries.length; i++){
        const [s, e, k] = queries[i]
        // console.log(s, e)
        for (let j = s; j <= e; j++){
            // console.log(j)
            if (j % k === 0){
                array[j]++
                // console.log(array)
            }
        }
    }
    // console.log(array)
    return array;
}