function solution(my_string, overwrite_string, s) {
    var answer = '';
    // my_string~s + overwrite_string + myString
    const firstIdx = my_string.slice(0, s) + overwrite_string
    const firstIdxLength = firstIdx.length
    if (firstIdxLength < my_string.length){
        const x = my_string.slice(my_string.length - (my_string.length - firstIdxLength))
        answer = firstIdx + x
        return answer
        // console.log(answer)
    }
    return firstIdx;
}