function solution(participant, completion) {
    // participant.sort()
    // completion.sort()
    var answer = '';
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < participant.length; i++){
        if (obj1[participant[i]]){
            obj1[participant[i]]++
        }else{
            obj1[participant[i]] = 1
        }
    }
    for (let i = 0; i < completion.length; i++){
        if (obj2[completion[i]]){
            obj2[completion[i]]++
        }else{
            obj2[completion[i]] = 1
        }
    }
    // console.log(obj1, obj2)
    let total = []
    for (const [key, value] of Object.entries(obj1)){
        // console.log(key, value)
        if (obj1[key] !== obj2[key]){
            total.push(key)
        }else if (value !== obj2[key]){
            total.push(key)
        }
    }
    // console.log(total.join(''))
    return total.join('');
}