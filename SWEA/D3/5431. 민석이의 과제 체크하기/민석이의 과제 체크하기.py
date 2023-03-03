T = int(input())

for t in range(1, T + 1):
    A, B = map(int, input().split())
    student = list(range(1, A+1))
    submit = list(map(int, input().split()))
    no_student = []
    for i in student:
        if i not in submit:
            no_student.append(i)
    print(f'#{t}', end=" ")
    print(*no_student)
