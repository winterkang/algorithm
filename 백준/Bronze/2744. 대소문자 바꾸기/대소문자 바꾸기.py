word = input()
new = []
for i in word:
    if i.isupper():
        new.append(i.lower())
    else:
        new.append(i.upper())

for i in new:
    print(i, end="")
