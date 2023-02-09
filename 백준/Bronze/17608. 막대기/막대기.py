import sys
input = sys.stdin.readline
stick = [int(input()) for _ in range(int(input()))]
stick.reverse()

big = stick[0]
cnt = 1
for i in stick:
    if i > big:
        big = i
        cnt += 1
print(cnt)
