function solution(spell, dic) {
    const sorted = spell.sort().join('')
    // console.log(sorted)
    for (let i = 0; i < dic.length; i++){
        const dicSorted = [...dic[i]].sort().join('')
        dic.splice(i, 1, dicSorted)
    }
    // console.log(dic)
    if (dic.includes(sorted)){
        return 1
    }else{
        return 2
    }
}