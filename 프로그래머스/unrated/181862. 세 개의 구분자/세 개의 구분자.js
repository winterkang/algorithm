function solution(myStr) {
    const empty = ['a', 'b', 'c']
    const newArray = myStr.split('').map(item => empty.includes(item)? ' ' : item).join('').split(' ');
    // 	[' ', ' ', ' ', 'o', 'n','l', 'e', 't', 't', 'u',' ', 'e', 't', 'o', 'm',' ', 't', 'o']
    //  join('') : onlettu etom to // 빈 문자열 기준으로 합쳐라
    // 	join('').split(' ') : [ '', '', '', 'onlettu', 'etom', 'to' ] => 공백을 기준으로 배열
    const answer = newArray.filter(item => item.length >= 1) // 요소의 길이가 1이상인 것만
    if (answer.length === 0) {
        answer.push('EMPTY');
    } // 빈 배열인 경우 'EMPTY' 추가
    return answer;
}