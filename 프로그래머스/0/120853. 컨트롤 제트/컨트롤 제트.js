function solution(s) {
    var answer = 0;
    const arr = s.split(' ')
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'Z'){
            arr.push(-arr[i-1])
        }
    }
    const filtering = arr.filter(x => Number(x))
    answer = filtering.reduce((a, b) => Number(a) + Number(b), 0)
    return answer;
}