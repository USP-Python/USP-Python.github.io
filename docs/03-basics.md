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

There is also the special operator "in" which we can use to check if an element is in a string, list, or dictionary. What does the following program print?

```python
lst = [1, 2, 3, 4]
dic = {'two': 2, 'four': 4}
if 2 not in lst:
    print("hi")
elif 2 in dic:
    print("hello")
elif 1 in dic:
    print("hallo")
else:
    print("hey")
```

### The `for` Statement
A 'for' loop allows the programmer to iterate over a sequence of objects.

```python
for i in range(1,5):
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

Let's now try writing a program to find the average of the values in a list.

```python
lst = [1, 2, 3, 4]
total = 0
for x in lst:
    total = total + x
result = total / len(lst)
print(result)
```
