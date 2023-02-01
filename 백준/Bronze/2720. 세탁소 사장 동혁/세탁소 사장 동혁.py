T = int(input())
money = [25, 10, 5, 1]
for t in range(T):
    C = int(input())

    for i in range(len(money)):

        a = C // money[i] # 몫은 출력하고
        b = C % money[i] # 나머지는 money의 요소들과 나눈다
        C = b # b의 값을 C에 저장해서 초기의 C의 값을 바꿔준다
        print(a, end=" ")
    print()
