final = []
for i in range(1, 6):
    num = list(map(int, input().split()))
    final.append(sum(num))

print(final.index(max(final))+1, max(final))
