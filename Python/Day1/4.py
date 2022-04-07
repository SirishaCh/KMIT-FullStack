import string


name = str(input('Enter name: '))
age = int(input('Enter age: '))

if age<100:
    print(name,'you will turn 100 years old in',100-age,'years')
else:
    print('you are already 100 years old')