# 알파벳 찾기
S = input()
alpha = list(range(97,123)) # 아스키코드 97:a ~ 122:z
for i in alpha:
    print(S.find(chr(i))) 
    # chr() : 아스키코드(숫자) -> 문자 변환
    # ord() : 문자 -> 아스키코드(숫자)
    # find vs index
    # find는 문자열에서만 사용 가능, 찾는 문자가 문자열에 없을 경우 -1반환
    # index는 반복가능한 자료형 ok, 찾는 문자가 없을 경우 attributerror 