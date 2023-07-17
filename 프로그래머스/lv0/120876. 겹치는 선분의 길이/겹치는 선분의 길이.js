function solution(lines) {
    var answer = 0;
    let arr = []
    for (let i = 0; i < lines.length; i++){
        const [x, y] = lines[i]
        for (let j = x + 1; j <= y; j++){
            arr.push(j)
        }
    }
    // console.log(arr)
    let obj = {}
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1
        }
    }
    let keys = []
    for (const [key, value] of Object.entries(obj)){
        if (value >= 2){
            keys.push(key)
        }
    }
    // console.log(keys.length)
    return keys.length;
}