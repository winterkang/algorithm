function solution(hp) {
    let ant = 0
    const attack = [5, 3, 1] 
    for (atk of attack){
        ant += parseInt(hp / atk) // 몫을 저장
        hp = hp % atk // 나머지 반환 후 hp 갱신
    }
    return ant;
}