function solution(n)
{
    var answer = 0;

    const str = n.toString().split('')
    answer = str.reduce((a, b) => Number(a) + Number(b), 0)
    return answer;
}