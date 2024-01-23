function solution(myStr) {
    var answer = [];
    myStr = myStr.split('a').join(' ')
    myStr = myStr.split('b').join(' ')
    myStr = myStr.split('c').join(' ')
    
    answer = myStr.split(' ').filter(x => x !== '')
    return answer.length ? answer : ['EMPTY']
}