function solution(str_list) {
    const l = str_list.indexOf('l')
    const r = str_list.indexOf('r')
    if (!str_list.includes('l') && !str_list.includes('r')){ 
        return []
    }if (!str_list.includes('l')){
        return str_list.slice(r + 1)
    }else if (!str_list.includes('r')){
        return str_list.slice(0, l)
    }else if (l < r){ // l이 먼저 나오는 경우
        return str_list.slice(0, l)
    }else if (l > r){ // r이 먼저 나오는 경우
        return str_list.slice(r + 1)
    }
}