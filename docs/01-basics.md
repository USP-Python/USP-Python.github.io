One way to understand programming is as a process of _transforming_ data. A simple calculator performing addition is programmed, for example, to transform two numbers into one.

<center>
![Addition](img/01-transform-data.png)
</center>

It is therefore necessary to consider,

1. Types of data
2. Operations on data
3. Naming of data

## Data Types and Their Operations
There are many built-in data types in python[^1]. For now, we need only focus on the following,

* Integers (`int`)
* Strings (`str`)
* Booleans (`bool`)

[^1]: For the curious, see the [docs](https://docs.python.org/3.6/library/stdtypes.html).

### Integers
Integers represent whole numbers, such as 0, 12, 93214, -1, and so on. Try the following, and observe the output,

```python
>>> 1
>>> 52
>>> 0
>>> -3
>>> 2 + 6
>>> 2 - 6
>>> 2 * 6
>>> 2 ** 6
>>> 2 / 6
>>> 2 // 6
>>> 2 % 6
>>> (2 + 6) * 3 / 10
>>> 2 / 0
>>> 2 // 0
```

As you may have noticed some familiar **operators**, such as addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`). The double asterisks (`**`) is the 'power' operator, which raises the first number to the power of the second; the double forward slashes (`//`) is the 'floored division' operator, which divides the first number by the second and gives the answer rounded down. The percent sign (`%`) is the modulo operator, which gives the remainder of the division of the first number by the second.[^2] The order of operations apply.

[^2]: I use the term 'number' here, instead of integer, as these operations can also apply to other data types, including other representations of numbers.

The last two expressions raises an error, as division by zero is not allowed. 

```python
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Errors in programming are extremely common, but generally harmless. Don't be afraid to run a command and fail! 

### Strings
Strings are sequences of characters, which can include letters, numbers, and symbols. Strings _must_ be surrounded by either single quotes (`'`) or double quotes (`"`).[^3] Try the following examples:

[^3]: Which type of quotation marks you use depends on your preference, and sometimes the context. [Here](https://www.codecademy.com/en/forum_questions/5375491180ff33f9370002c7) is a decent forum post on this issue.

```python
>>> 'abcg'
>>> '!@#$%&'
>>> '12347'
>>> 'abc123'
>>> 'This is a sentence'
>>> 'You can use single quotes'
>>> "or double quotes"
>>> 'as long as you use the same ones for each string...'
>>> "There can be 4 mix 0f numbers, and symb*$s!"
```

If you find the IDLE spitting errors, for example,
```python
>>> 'This is a sentence
  File "<stdin>", line 1
    'This is a sentence
                      ^
SyntaxError: EOL while scanning string literal
```

Make sure that you have surrounded both ends of the string with quotation marks, and that for each string you have used the same type of quotation marks.

**Do not confuse an integer with a string**. The integer `12` is not the same as the string `'12'`. Integers are representations of a _numerical value_, while strings are just characters. The integer `12` represents the quantity `12`. The string `'12'` represents the character `'1'` followed by the character `'2'`. Superficially, the former is not wrapped with quotation marks, but the latter is.[^4]

[^4]: Don't worry if this doesn't yet make sense to you. It's may be rather counter-intuitive at first.

Like integers, strings can be operated upon. To concatenate[^5] strings, we use the plus (`+`) operator.

```python
>>> 'a' + 'b'
>>> 'a' + 'b' + 'c' + '1' + '!'
>>> 'hello, ' + 'how are you today' + '?'
```

[^5]: To connect or combine

### Booleans
Unlike integers and strings, which may take up any number of values[^6], booleans can only be `True` or `False`.

[^6]: ...which may _virtually_ take up any number of values...

```python
>>> True
>>> False
```

As we will see shortly, booleans are _absolutely essential_ in programming. There are three boolean operators which come in the form of words rather than symbols: `not`, `and`, `or`.

```python
>>> not True
>>> not False
>>> False and False
>>> True and False
>>> True and True
>>> False or False
>>> True or False
>>> True or True
>>> not (not True or (False and not True))
```
