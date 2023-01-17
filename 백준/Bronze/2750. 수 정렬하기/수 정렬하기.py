N = int(input())
new = []
for i in range(N):
    new.append(int(input()))

new.sort()
for i in range(len(new)):
    print(new[i])
