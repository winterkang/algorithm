function solution(n, arr1, arr2) {
    let biArr1 = []
    let biArr2 = []
    // 전부 이진수로 변경
    for (let i = 0; i < arr1.length; i++){
        const bi1 = arr1[i].toString(2)
        const bi2 = arr2[i].toString(2)
        biArr1.push(bi1.padStart(n, '0'))
        biArr2.push(bi2.padStart(n, '0'))
        
    }
    // console.log(biArr1, biArr2)
    let total = []
    for (let i = 0; i < biArr1.length; i++){
        const arr1 = biArr1[i].split('').reverse()
        const arr2 = biArr2[i].split('').reverse()
        // console.log(arr1, arr2)
        let binary = []
        const max = Math.max(arr1.length, arr2.length)
        for (let j = 0; j < max; j++){
            if (arr1[j] === '1' || arr2[j] === '1'){
                binary.push('#')
            }else if (arr1[j] === '0' && arr2[j] === '0'){
                binary.push(' ')
            }
        }
       total.push(binary.reverse().join(''))
    }
    // console.log(total)
    return total;
}