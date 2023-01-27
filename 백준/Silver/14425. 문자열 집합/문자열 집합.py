
N, M = map(int, input().split())
S = []
words = []
for i in range(N):
    SS = input()
    S.append(SS)
for i in range(M):
    word = input()
    words.append(word)

cnt = 0
for word in words:
    if word in S:
        cnt += 1
print(cnt)
