# x, y축 리스트 만들고
from collections import Counter
X = []
Y = []

for i in range(3):
    x, y = list(map(int, input().split()))
# 입력받은 수를 x, y에 저장하고
    X.append(x)  # [5, 5, 7]
    Y.append(y)  # [5, 7, 5]
# x, y축에서 가장 적은 수 출력하기
for i in X:
    if X.count(i) == 1: # X리스트에서 5를 카운트하면 2개, 조건에 부합X
        print(i, end=" ") # 7을 카운트하면 1개, 조건 부합 O
        break
for i in Y:
    if Y.count(i) == 1:
        print(i)
        break