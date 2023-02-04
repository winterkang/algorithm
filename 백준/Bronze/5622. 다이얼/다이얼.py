dial = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
word = list(input().lower()) # 입력받은 대문자를 소문자로 바꾸고 리스트로 만들기

time = []
for j in word: # 입력받은 word for loop
    for i in dial: # 초기에 생성해둔 dial리스트 for loop
        if j in i: 
            # time 리스트에 append / 값으로 인덱스 위치 찾아서 + 3
            # +2만 하면 눌러야하는 다이얼 수만 나오고 몇 초가 걸리는지는 모름
            # 거기서 +1을 더 해줘야 몇 초가 걸리는지 알 수 있다
            time.append(dial.index(i) + 3)
        else:
            pass
print(sum(time))
