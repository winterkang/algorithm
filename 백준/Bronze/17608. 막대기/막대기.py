
import sys
input = sys.stdin.readline
N = int(input())  # 막대기 개수
height = [int(input()) for _ in range(N)]

big = 0
cnt = 0
for i in reversed(height):  # 리스트 뒤집기
    if big < i:
        big = i
        cnt += 1
print(cnt)
