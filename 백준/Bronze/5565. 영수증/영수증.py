n = int(input())
num = n
book = []
for i in range(9):
    price = int(input())
    book.append(price)
print(num - sum(book))
