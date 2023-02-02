w = []
k = []
for i in range(20):
    score = int(input())
    w.append(score)  # 우선 w대학에 전부 append

for n in w[10:]:
    k.append(n)  # w대학에서 10부터 끝까지 k대학에 append

del w[10:]  # w대학에서 k대학 점수 (10개) 삭제

# w대학, k대학 각각 sorted로 정렬
sorted_w = sorted(w)
sorted_k = sorted(k)

# w대학, k대학 각각의 대학의 참가자 중 득점이 높은 사람 3명의 합

# 위에서 정렬을 해줬으니까 뒤에서 3개의 요소만 꺼내서 sum
print(sum(sorted_w[-3:]), end=" ")  # w 대학

print(sum(sorted_k[-3:]))  # k 대학
