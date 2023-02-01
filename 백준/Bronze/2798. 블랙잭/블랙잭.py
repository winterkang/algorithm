n, m = map(int, input().split())
cards = list(map(int, input().split()))
new_cards = []
for i in range(n - 2):
    for j in range(i + 1, n - 1):
        for k in range(j + 1, n):
            if i != j != k:
                new_cards.append(cards[i] + cards[j] + cards[k])
# print(new_cards)
card = []
for i in new_cards:
    if i <= m:  # 21보다 작거나 같을 경우
        card.append(i)  # card리스트에 append
print(max(card))
