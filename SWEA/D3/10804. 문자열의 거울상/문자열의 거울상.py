mirror = {
    'b': 'd',
    'd': 'b',
    'p': 'q',
    'q': 'p'
}
T = int(input())
for t in range(1, T+1):
    word = list(input())
    new = []
    for i in word:
        for key, value in mirror.items():
            if i == key:
                new.append(value)
    print(f'#{t}', end=" ")
    print(*new[::-1], sep="")
