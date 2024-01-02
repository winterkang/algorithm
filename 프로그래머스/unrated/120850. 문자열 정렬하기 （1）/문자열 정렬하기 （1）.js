function solution(my_string) {
    var answer = [];
    const str = []
    for (let i = 97; i <= 122; i++){
        str.push(String.fromCharCode(i))
    }
    const arr = my_string.split('').filter(x => !str.includes(x))
    answer = arr.sort((a, b) => a - b).map(x => parseInt(x))
    return answer;
}