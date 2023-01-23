# 학점 계산
new_score = []
for i in range(5):
    score = int(input())
    if score < 40:
        new_score.append(40)
    else:
        new_score.append(score)

print(round(sum(new_score)/len(new_score)))
