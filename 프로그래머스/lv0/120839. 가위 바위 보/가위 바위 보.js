function solution(rsp) {
    var answer = '';
    // 가위2 바위0 보5
    // rsp를 for문 돌려서
    // 경우의 수를 따져준다(rsp를 이기는 경우)
    for (r of rsp){
        if (r === '2'){
            answer += '0'
        }else if(r === '0'){
            answer += '5'
        }else{
            answer += '2'
        }
    }
    return answer;
}