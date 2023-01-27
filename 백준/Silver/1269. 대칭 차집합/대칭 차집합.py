# 집합 A, B의 원소의 개수가 공백으로 구분해 입력받음
A, B = map(int, input().split())
# 집합 a의 원소를 공백으로 구분해 입력받음
a = set(map(int, input().split()))
# 집합 b의 원소를 공백으로 구분해 입력받음
b = set(map(int, input().split()))

only_a = len(a - b)
only_b = len(b - a)
print(only_a + only_b)
