T = int(input())
for t in range(1, T+1):
    score = list(map(int, input().split()))
    for i in range(len(score)):
        if score[i] < 40:
            score[i] = 40
    print(f"#{t} {int(sum(score)/len(score))}")
