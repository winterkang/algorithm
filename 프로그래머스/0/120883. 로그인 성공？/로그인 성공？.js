function solution(id_pw, db) {
    var answer = '';
    // 아이디, 비번 일치 => login
    // fail => 아이디 일치X: fail / 아이디O비번X: wrong pw
    for (let i = 0; i < db.length; i++){
        const [id, pw] = db[i]
        if (id_pw[0] === id && id_pw[1] === pw){
            answer = 'login'
            break
        }else if (id_pw[0] === id && id_pw[1] !== pw){
            answer = 'wrong pw'
            break
        }else if (id_pw[0] !== id){
            answer = 'fail'
        }
    }
    return answer;
}
// login과 wrong pw, fail에 우선 순위가 있기 때문입니다. 반례입니다.
// console.log(solution(["abc04", "345"], [["abc04", "335"], ["abc03", "345"]]))
// 기댓값 〉 "wrong pw"