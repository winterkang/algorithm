function solution(arr) {
    let cnt = 0
    let preArr = arr.slice()
    while(true){
        // 현재 배열을 조건에 맞게 변환
        const changeCurArr = preArr.map(e => {
            if (e >= 50 && e % 2 === 0) return e / 2 
            if (e < 50 && e % 2 !== 0) return e * 2 + 1
            return e
        })
        // 이전 배열이 현재 배열과 같은 경우 반복 종료
        const isAllSame = preArr.every((e, i) => e === changeCurArr[i])
        if (isAllSame) break
        // 반복할 때마다 카운트
        cnt++ 
        // 현재 배열을 이전 배열에 저장
        preArr = changeCurArr
    }
    return cnt;
}