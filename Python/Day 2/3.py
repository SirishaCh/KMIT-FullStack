# 3. Remove empty strings from the list of strings
# list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
# Expected Output:
# ["Mike", "Emma", "Kelly", "Brad"]

str1 = str(input("Enter the strings separated by comma"))
arr1 = str1.split(",")
print(arr1)

for x in arr1:
    print('x',x)
    if x == " ":
        arr1.remove(x)

print(arr1)