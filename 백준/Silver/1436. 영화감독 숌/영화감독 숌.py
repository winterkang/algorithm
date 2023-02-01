n = int(input())
nth = 666
cnt = 0
while True:  # 완전탐색 문제라서 while문으로 접근
    if '666' in str(nth):  # '666'(문자열형태)만 존재하면 ok
        cnt += 1
    if cnt == n:
        print(nth)
        break
    nth += 1  # cnt == n조건에 부합하지 않는다면 nth + 1하고 다시 반복
