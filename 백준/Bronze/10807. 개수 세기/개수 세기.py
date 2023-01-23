N = int(input())
for n in range(N):
    num = list(map(int, input().split()))
    v = int(input())
    print(num.count(v))
    break
