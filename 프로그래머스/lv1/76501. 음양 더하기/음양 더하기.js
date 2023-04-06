function solution(absolutes, signs) {
    let newAb = []
    for (let i = 0; i < absolutes.length; i++){
        if (signs[i] === true){
            newAb.push(absolutes[i])
        }else{
            newAb.push(-absolutes[i])
        }
    }
    const sum = newAb.reduce((accumulator, currentValue) =>
                            accumulator + currentValue)
    return sum;
}