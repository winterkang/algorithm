T = int(input())
for t in range(1, T+1):
    word = input()

    if word[:1] == word[-1:]:
        print(f'#{t} 1')
    else:
        print(f"#{t} 0")
