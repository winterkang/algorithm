N = int(input())  # 설문조사를 한 사람 수: 3

cute_cnt = 0
not_cute_cnt = 0

for n in range(N):
    vote = int(input())  # 어떤 의견 표명했는지?
    if vote == 1:
        cute_cnt += 1
    else:
        not_cute_cnt += 1

if cute_cnt > not_cute_cnt:
    print('Junhee is cute!')
else:
    print("Junhee is not cute!")
