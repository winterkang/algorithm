function solution(my_string) {
    let answer = [];
    const string = my_string.split('')
    for (str of string){
        answer.push(str.toLowerCase())
    }
    answer.sort()
    return answer.join('');
}