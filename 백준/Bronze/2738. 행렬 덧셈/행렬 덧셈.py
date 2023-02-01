# 틀린 코드
N, M = map(int, input().split())  # 3 3

A = [list(map(int, input().split())) for _ in range(N)]
# range(N) 여기서 N인 이유는 문제에서 N개의 줄이라고 명시했으니까!
#A = [
#    [1, 1, 1],
#    [2, 2, 2],
#    [0, 1, 0]
#]
B = [list(map(int, input().split())) for _ in range(N)]
#B = [
#    [3, 3, 3],
#    [4, 4, 4],
#    [5, 5, 100]
#]
# A와 B의 합을 구하기
for i in range(N):
    for j in range(M):
        print(A[i][j] + B[i][j], end=" ")
    print()  # 한 줄에 출력되는 것을 방지하고자 개행