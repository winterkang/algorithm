# 단어 정렬
voca = []
N = int(input())  # 13
for n in range(N):
    # 입력을 받아서 리스트로 만든다
    w = input()
    voca.append(w)
# 중복제거
word = list(set(voca))
# sort: 원본 변경, sorted: 사본 생성
# 오름차순 정렬(알파벳 순서대로)
word.sort()

# 단어 길이를 기준으로 오름차순 정렬
word.sort(key=lambda x: len(x))


for i in word:
    print(i)
