function solution(rank, attendance) {
    let obj = {}
    for (let i = 0; i < rank.length; i++){
        if (attendance[i] === true){
            obj[i] = rank[i]
        }
    }
    // console.log(obj)
    
    // value만 뽑아서 정렬
    const values = Object.values(obj).sort((a, b) => a - b)
    // console.log(values)
    
    let total = []
    for (let i = 0; i < values.length; i++){
        for (const [key, value] of Object.entries(obj)){ 
            if (values[i] === value){
                total.push(key)
            }   
        }
    }
    // console.log(total)
    
    // 정수 변환
    const num = total.map(item => parseInt(item))

    return 10000 * num[0] + 100 * num[1] + num[2]
}