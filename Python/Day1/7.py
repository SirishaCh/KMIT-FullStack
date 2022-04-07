cost = float(input('Enter cost: '))
percentage = int(input('Enter percentage: '))
tax = int(input('Enter tax: '))

tip = (round(cost)* percentage)/100 
tax1 = (round(cost)* tax)/100

print(round(cost+tip+tax1))