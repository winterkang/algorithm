X = int(input())  # 총금액 260000
N = int(input())  # 물건 종류 수 4
market = []
for n in range(N):  # 0 ~ 3
    a, b = list(map(int, input().split())) # 물건 금액, 개수
    market.append(a * b) # (물건 금액 * 개수) 리스트에 추가
total = 0
for i in market:
    total += i
if X == total:
    print("Yes")
else:
    print("No")
