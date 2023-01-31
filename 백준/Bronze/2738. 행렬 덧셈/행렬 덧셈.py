N, M = map(int, input().split())  # 3 3

A = [list(map(int, input().split())) for _ in range(N)]

for i in range(N):  # 리스트의 원소(리스트)가 3개
    B = list(map(int, input().split()))
    # [3, 3, 3] [4, 4, 4] [5, 5, 100]
    for j in range(M):  # 원소(리스트속 리스트의 원소)가 M개
        print(A[i][j] + B[j], end=" ")
    print()
