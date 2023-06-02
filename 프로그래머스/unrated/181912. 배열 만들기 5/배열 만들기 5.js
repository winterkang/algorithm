function solution(intStrs, k, s, l) {
    var answer = [];
    for (int of intStrs){
        answer.push(parseInt(int.slice(s, s + l)))
    }
    let result = answer.filter(a => a > k)
    return result;
}