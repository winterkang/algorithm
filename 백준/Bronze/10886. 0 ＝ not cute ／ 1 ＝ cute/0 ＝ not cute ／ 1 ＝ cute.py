new_vote = []
for n in range(int(input())):
    vote = input()
    new_vote.append(vote)

if new_vote.count('0') > new_vote.count('1'):
    print('Junhee is not cute!')
else:
    print('Junhee is cute!')
