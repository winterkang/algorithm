n, k = map(int, input().split())
x = list(map(int, input().split()))
x.sort()
x.reverse()
# print(x)
score = []
for i in range(k):
    score.append(x[i])
print(score[k-1])
