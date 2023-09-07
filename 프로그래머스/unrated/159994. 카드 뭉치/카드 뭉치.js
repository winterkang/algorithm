function solution(cards1, cards2, goal) {
    for (const char of goal){
        if (cards1[0] === char){
            cards1.shift()
        }else if (cards2[0] === char){
            cards2.shift()
        }else{
            return 'No'
        }
    }
    return 'Yes'
}