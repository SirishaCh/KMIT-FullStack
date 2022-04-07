income = float(input('Enter income: '))

if income <= 85528:
    tax = round((income * 0.18) - 556.50)
    if tax < 0: tax = 0.0
    print('The tax is:',tax,'Dollars')
else:
    tax = round(14839.50 + (income - 85528) * 0.32)
    if tax < 0: tax = 0.0
    print('The tax is:',tax,'Dollars')
    