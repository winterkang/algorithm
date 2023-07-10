function solution(name, yearning, photo) {
    var answer = [];
    let obj = {}
    for (let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i]
    }
    // console.log(obj)
    for (let i = 0; i < photo.length; i++){
        for (let j = 0; j < photo[i].length; j++){
            if (name.includes(photo[i][j])){
                photo[i].splice(j, 1, obj[photo[i][j]])
            }
        }
    }
    // console.log(photo)
    let numArr;
    let newArr = []
    for (let i = 0; i < photo.length; i++){
       // console.log(photo[i]) 
        numArr = photo[i].filter(item => !isNaN(Number(item)))
        // console.log(numArr)
        const sum = numArr.reduce((acc, cur) => acc + cur, 0)
        // console.log(sum)
        newArr.push(sum)
    }
    // console.log(newArr)
    return newArr;
}