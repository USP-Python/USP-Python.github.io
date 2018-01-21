There are two main kinds of loops: while loops and for loops. This code uses a while loop to sum up the integers from 1 to 9. 

```python
counter = 0
sum = 0
while counter < 10:
      sum = sum + counter
      counter = counter + 1
print(sum)
```

In this while loop, "counter < 10" is a condition. So, at every iteration of the loop, the counter is added to sum, and the value of the counter is incremented by 1. When counter becomes 10, the program will break out of the loop and print the value of sum, which is 45. 

This program uses a for loop:

```python
str = "hello"
new_str = ""
for letter in str:
    new_str = letter + new_str
print(new_str)
```

Basically, it loops through each letter in the string "hello", and at every stage of the loop, we add the letter to the back of the new_str. So, this program reverses the letters in the string.

Can you try writing a similar program to reverse the order of letters using a while loop? 
