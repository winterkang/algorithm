function solution(n, m, section) {
    var answer = 0;
    const arr = Array.from({length:n}).fill(true)
    for (let i = 0; i < section.length; i++){
        arr[section[i] - 1] = false
    }
    // console.log(arr)
    let cnt = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === false){
            arr.splice(i, m, true)
            cnt++
            // console.log(arr)
        }
    }
    // console.log(arr)
    // console.log(cnt)
    return cnt;
}