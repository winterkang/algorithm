dial = [
    'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'
]
word = input()

time = 0
for i in dial:
    for n in i:
        for w in word:
            if n == w:
                time += dial.index(i) + 3
print(time)