# 2. Concatenate two lists in the following order
# list1 = ["Hello ", "take "] 
# list2 = ["Dear", "Sir"]
# Expected Output:
# ['Hello Dear', 'Hello Sir', 'take Dear', 'take Sir']

arr1 = str(input("Enter the first string separated by spaces"))
str1 = arr1.split()
arr2 = str(input("Enter the second string separated by spaces"))
str2 = arr2.split()

print(str1,str2)
lst = []

for x in range(0,len(str1)):
    for y in range(0,len(str2)):
        lst.append(str1[x]+" "+str2[y])

print(lst)
