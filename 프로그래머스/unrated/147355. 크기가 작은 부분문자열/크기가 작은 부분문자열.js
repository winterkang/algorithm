function solution(t, p) {
    const tArr = t.split('');
    const len = p.length;
    let total = 0;
    
    let cnt = 0;
    for (let i = 0; i < tArr.length; i++) {
        if (tArr.slice(i, len + cnt).length === len) { // 필터링 조건을 첫 번째 반복문에서 수행
            if (parseInt(p) >= parseInt(tArr.slice(i, len + cnt).join(''))) { // 두 번째 반복문도 첫 번째 반복문 안으로 이동
                total++;
            }
        }
        cnt++;
    }
    
    return total;
}
