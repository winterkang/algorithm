from collections import Counter
T = int(input())
for t in range(1, T+1):
    N = int(input())
    number = list(map(int, input().split()))

    common = Counter(number).most_common()
    print(f'#{t} {common[0][0]}')
