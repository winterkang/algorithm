function solution(lines) {
    // 선분의 길이 체크
    let arr = []
    for (let i = 0; i < lines.length; i++){
        const [x, y] = lines[i]
        for (let j = x; j < y; j++){
            arr.push(j)
        }
    }
    // console.log(arr)
    // 중복체크위한 객체 생성
    let obj = {}
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1
        }
    }
    // console.log(obj)
    // 중복된 key 찾기
    let keys = []
    for (const [key, value] of Object.entries(obj)){
        if (value >= 2){
            keys.push(key)
        }
    }
    // console.log(keys)
    // console.log(keys.length)
    return keys.length;
}