T = int(input())  # 2
for t in range(T):

    R, S = input().split()
    for s in S:
        print(s*int(R), end="")
    print()
