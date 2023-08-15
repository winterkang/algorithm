function solution(clothes) {
    let obj = {}
    for (let i = 0; i < clothes.length; i++){
        const cloth = clothes[i]
        if (obj[cloth[1]]){
            obj[cloth[1]]++
        }else{
            obj[cloth[1]] = 1
        }
    }
    // console.log(obj)
    
    // 각 종류 별로 최대 1가지 의상만 착용 가능 => +1은 해당 종류의 의상을 입지 않는 경우
    const value = Object.values(obj).map(item => item + 1).reduce((acc, cur) => acc * cur, 1)
    // console.log(value)
    
    // 최소 한 개의 의상은 입어야 한다 => 아무것도 입지 않는 경우 빼야함(-1)
    return value - 1;
}