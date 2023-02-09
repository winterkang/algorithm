import sys
input = sys.stdin.readline
num = list(map(int, input().split()))
N = [1, 2, 3, 4, 5]
while N != num:
    for i in range(len(num)-1):
        if num[i] > num[i+1]:
            num[i], num[i+1] = num[i+1], num[i]
            print(*num)
    if num == N:
        break