div = []
for i in range(10):
    num = int(input())
    div.append(num % 42)  # 나머지 구해서 리스트 append
print(len(list(set(div))))
