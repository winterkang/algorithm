function solution(myString, pat) {
    var answer = '';
    const idx = myString.lastIndexOf(pat[pat.length -1])
    answer = myString.slice(0, idx + 1)
    return answer;
}