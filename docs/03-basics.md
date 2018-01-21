Similar to how you would read a script, Python reads in a top-down order. You, the scriptwriter, are able to control how Python reads and execute the script. 

This is achieved using _control flow_ statements. There are 3 common control flow statements in Python,

1. `if`
2. `for`
3. `while`
 
### The `if` Statement
Simply put, `if` a certain condition is `true`, Python runs the block of statement in the `if`-block, _else_ it runs the statements in the `else`-block. The `else` clause is optional.

```python
grade = input('Enter your grade: ')

if grades >= 85: 
    print('Great job!')
elif grades >= 50:
    print('Study harder!')
else:
    print('Hello! Wake up!')
``` 

### The `for` Statement
A 'for' loop allows the programmer to iterate over a sequence of objects.

```python
for i in range(1,5)
    print(i)
print('End')
``` 

Output

```python
1
2
3
4
End
```

It can also be use to iterate through a list.

```python
my_pets = ['lions', 'tigers', 'eagles', 'crocs']

for pets in my_pets:
    print(pets)
```

Output

```python
lions
tigers
eagles
crocs
```

Try reading this program to figure out what it does: 

```python
str = "hello"
new_str = ""
for letter in str:
    new_str = letter + new_str
print(new_str)
```
Basically, it loops through each letter in the string "hello", and at every stage of the loop, we add the letter to the back of the new_str. So, this program reverses the letters in the string.

### The `while` Statement 
`while` a certain condition is true, the loop continues until the condition turns false. 

```python
num = 88
run = True

while run:
    guess = input('Enter your guess: ')
    if guess < num:
        print('The answer is higher')
    elif guess > num:
        print('The answer is lower')
    elif guess == num:
        print('That's right!')
        run = False
```

This program uses a while loop to sum up the integers from 1 to 9. 

```python
counter = 0
sum = 0
while counter < 10:
      sum = sum + counter
      counter = counter + 1
print(sum)
```

In this while loop, "counter < 10" is a condition. So, at every iteration of the loop, the counter is added to sum, and the value of the counter is incremented by 1. When counter becomes 10, the program will break out of the loop and print the value of sum, which is 45. 

Can you try writing a program to reverse the order of letters using a while loop? 
