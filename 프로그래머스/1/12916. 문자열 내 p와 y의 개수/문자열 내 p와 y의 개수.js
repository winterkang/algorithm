function solution(s){
    const str = s.toLowerCase()
    let cnt = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'p'){
            cnt++
        }else if (str[i] === 'y'){
            cnt--
        }
    }
    return cnt === 0 ? true : false
}