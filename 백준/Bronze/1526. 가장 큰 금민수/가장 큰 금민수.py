N = int(input())  # 100
while True:
    if len(str(N)) == str(N).count('4') + str(N).count('7'):
        # 입력값 N을 string으로 형변환해서
        # str(N)에 '4' + '7' 각각 카운트한 수의 합과 같다면
        print(N)  # 출력
        break

    N -= 1  # 만약 위의 조건이 맞지 않다면 -1
