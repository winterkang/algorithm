N = int(input())

num = list(map(int, input().split()))
num.sort() # 크기 순으로 배열(= 오름차순)
print(num[len(num) // 2]) # 전체 길이를 반으로 나눈 값의 위치
