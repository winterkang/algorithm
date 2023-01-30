# 100 x 100 매트릭스 생성
# 리스트내 0이 100개가 있고 그런 100개의 리스트가 생성 (100칸의 모눈 종이라고 생각하기)
matrix = [[0] * 100 for _ in range(101)]

cnt = 0
# 4개의 숫자를 네 줄의 입력을 받기
for i in range(4):
    x1, y1, x2, y2 = map(int, input().split())

    for a in range(x1, x2):  # x2가 x2+1이 아닌 이유: 좌표가 아니라 박스를 구해야 해서
        for b in range(y1, y2):
            if matrix[a][b] == 0:
                matrix[a][b] += 1
                cnt += 1
print(cnt)  # 표시된 좌표의 수 = 색칠된 박스의 넓이