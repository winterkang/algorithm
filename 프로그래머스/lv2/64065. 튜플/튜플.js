function solution(s) {
    var answer = [];
    let arr = []
    let numStr = ''
    for (let i = 0; i < s.length; i++){
        if (!isNaN(Number(s[i]))){
            numStr += s[i]
        }else {
            arr.push(numStr)
            numStr =''
        }
    }
    arr = arr.filter(item => item !== '')
    // console.log(arr)
    let obj = {}
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]]){
            obj[arr[i]] += 1
        }else{
            obj[arr[i]] = 1
        }
    }
    // console.log(obj)
    const values = Object.values(obj).sort((a, b) => b - a)
    values.forEach(item => {
        for (const [key, value] of Object.entries(obj)){
            if (item === value){
                answer.push(parseInt(key))
            }
        }
    })
    // console.log(answer)
    return answer;
}