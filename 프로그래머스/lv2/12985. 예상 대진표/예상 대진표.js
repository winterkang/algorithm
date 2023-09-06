function solution(n,a,b)
{
    let numA = a
    let numB = b
    let circle = 0
    while(numA !== numB){
        numA = Math.ceil(numA / 2)
        numB = Math.ceil(numB / 2)
        circle++
        // console.log('numA:',numA, 'numB:',numB, 'circle:',circle)
    }
    return circle;
}