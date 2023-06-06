function solution(arr, queries) {
    let result = arr.slice()
    
    for (let i = 0; i < queries.length; i++){
        let [s, e] = queries[i]

        // console.log(s, e)
        let temp = result[s]
        result[s] = result[e]
        result[e] = temp


        // console.log(result)
    }
    return result;
}