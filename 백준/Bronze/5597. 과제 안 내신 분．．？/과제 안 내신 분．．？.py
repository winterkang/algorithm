new = []
perfect = []
for i in range(1, 31):
    perfect.append(i)  # 1~30까지의 리스트

for i in range(1, 29):
    num = int(input())
    if num not in new:
        new.append(num)
new_sorted = sorted(new)  # 일부 빠진 리스트

for i in new_sorted:
    perfect.remove(i)
print(*perfect, sep='\n')
