number = [int(input()) for _ in range(5)] # 입력받은 값을 새 리스트에 저장

total = int(sum(number) / len(number)) # 평균 값

num_sort = sorted(number) # 중앙값 출력을 위한 정렬
mid = len(num_sort) // 2 # 중앙값 찾기
print(total, num_sort[mid], sep='\n')