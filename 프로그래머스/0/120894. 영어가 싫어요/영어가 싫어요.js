function solution(numbers) {
    var answer = 0;
    const alpha = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    alpha.forEach((e, i) => 
         numbers = numbers.split(e).join(i)          
                   )
    return parseInt(numbers);
}