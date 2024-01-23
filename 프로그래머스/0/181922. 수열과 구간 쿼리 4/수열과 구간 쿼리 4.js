function solution(arr, queries) {
    var answer = [];
    for (let i = 0; i < queries.length; i++){
        const [x, y, z] = queries[i]
        for (let j = x; j <= y; j++){
            if (j % z === 0){
                arr[j] = arr[j] + 1
            }
        }
    }
    
    return arr;
}