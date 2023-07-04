function solution(array) {
    let obj = {}
    for (let i = 0; i < array.length; i++){
        const num = array[i]
        if (obj[num]){
            obj[num]++
        }else{
            obj[num] = 1
        }
    }
    let mode = []
    for (i in obj){
        mode.push(obj[i])
    }
    const max = Math.max(...mode)
    let find = []
    for (i in obj){
        if (max === obj[i]){
            find.push(i)
        }
    }
    console.log(find)
    if (find.length === 1){
        return Number(find[0])
    }else{
        return -1
    }
}