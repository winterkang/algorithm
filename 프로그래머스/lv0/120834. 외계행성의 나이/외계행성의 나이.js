function solution(age) {
    let answer = '';
    const ageList = age.toString().split('')
    alpha = ['a','b','c','d','e','f','g','h','i','j']
    // age를 for문 돌려서 원소자체를 인덱스로 지정하고 alpha에서 찾기
    for (al of ageList){
        answer += alpha[parseInt(al)]
    }
    return answer;
}