two_d_list = [list(input()) for _ in range(8)]
# 짝수,짝수 => 흰색
# 홀수,홀수 => 검은색
cnt = 0
for i in range(len(two_d_list)):
    for j in range(len(two_d_list)):
        if (i % 2 == 0) and (j % 2 == 0):  # 짝수, 짝수
            if two_d_list[i][j] == 'F':
                cnt += 1
        elif (i % 2 == 0) and (j % 2 != 0): # 짝수, 홀수 => pass
            pass
        elif (i % 2 != 0) and (j % 2 != 0):  # 홀수, 홀수
            if two_d_list[i][j] == 'F':
                cnt += 1
        elif (i % 2 != 0) and (j % 2 == 0): # 홀수, 짝수 => pass
            pass
print(cnt)
