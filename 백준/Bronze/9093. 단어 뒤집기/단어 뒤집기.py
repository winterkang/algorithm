T = int(input())  # 테스트 케이스 개수: 2

for t in range(T):
    N = input().split()
    for n in N:
        print(n[::-1], end=" ")
