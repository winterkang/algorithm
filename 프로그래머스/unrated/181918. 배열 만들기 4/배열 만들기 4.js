function solution(arr) {
    var stk = [];
    let i = 0
    while(i < arr.length){
        if (stk.length === 0){ // stk에 원소가 없는 경우
            stk.push(arr[i])
            i++
        }else{ // stk에 원소가 있는 경우
            if (stk.slice(-1) < arr[i]){
                stk.push(arr[i])
                i++
            }else{
                stk.pop()
            }
        }
    }
    return stk;
}