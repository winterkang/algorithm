function solution(a, b) {
    var answer = 0;
    const ab = a.toString() + b.toString()
    const a2b = 2 * a * b
    answer = Math.max(ab, a2b)
    return answer;
}