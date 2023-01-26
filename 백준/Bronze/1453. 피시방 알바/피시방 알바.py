# 손님 수
N = int(input()) 
# 본인이 앉고 싶은 자리 번호
seat = list(map(int, input().split())) 
# 중복 제거된 리스트에 길이를 셈
no_seat = len(set(seat))
# 손님 수 - 중복 제거된 리스트의 길이 = 거절당하는 사람의 수
print(N - no_seat)
