function solution(id_pw, db) {
    let answer = true;
    for (let i = 0; i < db.length; i++){
        const [id, pw] = db[i]
        if ((id === id_pw[0]) && (pw === id_pw[1])){
            return 'login'
        }else if ((id === id_pw[0]) && (pw !== id_pw[1])){
            return 'wrong pw'
        }
    }
    return 'fail'
}