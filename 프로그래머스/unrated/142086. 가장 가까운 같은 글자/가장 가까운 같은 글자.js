function solution(s) {
    const array = s.split('')
    var answer = [];
    let str = []
    for (let i = 0; i < s.length; i++){
        if (!str.includes(s[i])){
            str.push(s[i])
            answer.push(-1)
        }else{ // 이미 str 배열에 같은 요소가 존재하는 경우
            for (let j = str.length - 1; j >= 0; j--){ // str배열을 거꾸로 순회
                if (s[i] === str[j]){
                    answer.push(i - j)
                    str.push(str[j])
                    break // 가장 가까운 값을 찾으면 반복 중단
                }
            }
        }
    }
    return answer;
}