function solution(numLog) {
    const controller = {
        "1":"w",
        "-1":"s",
        "10":"d",
        "-10":"a"
    }
    let string = '' 
    for (let i = 0; i < numLog.length - 1; i++){
        for (key in controller){
            if (numLog[i + 1] - numLog[i]  === parseInt(key)){ 
                string += controller[key]
            }   
        }
    }
    return string;
}