function solution(s1, s2) {
    let count = 0;
    // for 문을 두번 돌려서 확인
    for (i of s1){
        for (j of s2){
            if (i === j){
                count += 1
            }
        }
    }
    
    return count;
}