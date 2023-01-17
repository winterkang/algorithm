N = int(input())  # 26
num = N
cnt = 0

while True:
    a = num % 10  # 6
    b = num // 10  # 2
    c = (a + b) % 10  # 8 일의 자리수 뽑기
    num = (a * 10) + c

    cnt += 1
    if (num == N):
        break
print(cnt)
