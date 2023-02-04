dial = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
word = list(input().lower())

time = []
for j in word:
    for i in dial:
        if j in i:
            time.append(dial.index(i) + 3)
        else:
            pass
print(sum(time))