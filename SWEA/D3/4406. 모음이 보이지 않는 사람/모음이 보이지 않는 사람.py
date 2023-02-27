T = int(input())
vowel = ['a', 'e', 'i', 'o', 'u']
for t in range(1, T+1):
    word = input()
    for w in word:
        if w in vowel:
            word = word.replace(w, "")
    print(f'#{t} {word}')
