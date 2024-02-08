function solution(a, b, c, d) {
    var answer = 0;
    let obj = {}
    const arr = [a, b, c, d]
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1
        }
    }
    // console.log(obj)
    const keys = Object.keys(obj).map(x => parseInt(x))
    // console.log(keys)
    if (keys.length === 4){
        answer = Math.min(...keys)
    }else if(keys.length === 3){
        let ref = []
        for (let [key, value] of Object.entries(obj)){
            if (value === 1){
               ref.push(parseInt(key)) 
            }
        }
        answer = ref.reduce((acc, cur) => acc * cur, 1)
    }else if (keys.length === 2){
        for (let [key, value] of Object.entries(obj)){
            if (value === 2){
                answer = (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1])
            }else if (value === 3){
                const extra = obj[keys.find(x => x !== parseInt(key))] // value === 1
                answer = Math.pow(10 * parseInt(key) + keys.find(x => x !== parseInt(key)), 2)
            }
        }
        
    }else{
        answer = 1111 * keys[0]
    }
    return answer;
}