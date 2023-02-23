def solution(my_string, n):
    attach = []
    for i in my_string:
        attach.append(i*n)
        answer = "".join(attach)
    return answer