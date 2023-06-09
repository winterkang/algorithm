function solution(myString, pat) {
    const patLen = pat.length
    let cnt = 0
    for (let i = 0; i < myString.length; i++){
        if (pat === myString.slice(i, i + patLen))
            cnt += 1
    }
    // console.log(cnt)
    return cnt;
}