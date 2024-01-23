function solution(s) {
    var answer = '';
    const mid = s.length / 2
    if (s.length % 2 === 0){
        answer = s.slice(mid - 1, mid + 1)
    }else{
        answer = s[Math.floor(mid)]
    }
    return answer;
}