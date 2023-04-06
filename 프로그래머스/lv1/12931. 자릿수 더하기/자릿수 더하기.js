function solution(n)
{
    let answer = 0;
    const numStr = n.toString().split('')
    for (num of numStr){
        answer += parseInt(num)
    }


    return answer;
}