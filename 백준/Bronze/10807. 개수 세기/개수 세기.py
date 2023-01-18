import sys

T = int(sys.stdin.readline())  # 11
N = list(map(int, sys.stdin.readline().split()))  # 11개의 숫자 입력
print(N.count(int(sys.stdin.readline())))  # N 리스트에서 v를 찾아라
