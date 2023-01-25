N = int(input())
score = list(map(int, input().split()))  # [40, 80, 60]
big_score = max(score)
new_list = []
for i in score:
    new_list.append(i / big_score * 100)


print(sum(new_list)/len(new_list))
