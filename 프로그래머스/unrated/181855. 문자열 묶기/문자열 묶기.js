function solution(strArr) {
    let arr = []
    for (let i = 0; i < strArr.length; i++){
        arr.push(strArr[i].length)
    }
    let obj = {}
    for (let j = 0; j < arr.length; j++){
        if (obj[arr[j]]){
            obj[arr[j]]++
        }else{
            obj[arr[j]] = 1
        }
    }
    const values = Object.values(obj)
    
    return Math.max(...values);
}