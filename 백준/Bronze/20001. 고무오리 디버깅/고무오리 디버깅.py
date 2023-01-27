new = []  # 빈 리스트 길이는 0
# pop append
while True:
    word = input()
    if word != '고무오리 디버깅 끝':
        if word == '문제':
            new.append(word)
        elif word == '고무오리':
            if len(new) <= 0:
                # new리스트에 '문제'가 없다면 '문제'를 두번 추가
                new.append('문제')
                new.append('문제')

            else:  # new리스트에 '문제'가 있다면 pop
                new.pop()
    else:
        break
if len(new) > 0:
    print('힝구')
else:
    print('고무오리야 사랑해')
