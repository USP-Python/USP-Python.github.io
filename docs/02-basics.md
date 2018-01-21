Similar to how you would read a script, Python reads in a top-down order. You, the scriptwriter, are able to control how Python reads and execute the script. 

This is achieved using _control flow statements_. There are 3 common control flow statements in Python,

1. `if`
2. `for`
3. `while`
 
### The `if` Statement
Simply put, `if` a certain condition is `true`, Python runs the block of statement in the `if`-block, `else` it runs the statements in the `else`-block. The `else` clause is optional.

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

'''python
1
2
3
4
End
'''

It can also be use to iterate through a list.

```python
myPets = ['lions', 'tigers', 'eagles', 'crocs']

for pets in myPets:
	print(pets)
```

Output

'''python
lions
tigers
eagles
crocs
'''

### The `while` Statement 
`while` a certain condition is true, the loop continues until the condition turns false. 

```python
num = 88
run = True

while(run){
	guess = input('Enter your guess: ')
	if guess < num:
		print('The answer is higher')
	elif guess > num:
		print('The answer is lower')
	else guess == num:
		print('That's right!')
		run = False
} 

```

