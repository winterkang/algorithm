new = []
for i in range(9):
    new.append(int(input()))

print(max(new), new.index(max(new))+1)
