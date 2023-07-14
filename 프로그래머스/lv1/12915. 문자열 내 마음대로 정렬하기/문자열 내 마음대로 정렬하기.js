function solution(strings, n) {
    let arr = []
    for (let i = 0; i < strings.length; i++){
        const array = strings[i].split('')
        array.unshift(array[n])
        arr.push(array.join(''))
    }
    const answer = arr.sort().map(item => item.slice(1))
    return answer;
}