function solution(arr, queries) {
    let result = arr.slice()
    
    for (let i = 0; i < queries.length; i++){
        const [s, e] = queries[i]
        
        for (let j = s; j <= e; j++){
            result[j] += 1
        }
    }
    return result;
}