A data structure is something we use to store values. A list is an important in-built data structure in python, which we represent using square brackets:

```python
my_list = [1, 2, 3, 4, 5]
```

We can access the contents of a list using indices, just like we did for strings. Remember that we start counting from 0. We can also find the length of the list using len. Lastly, we can also slice a list to retrieve a smaller portion of the list by using [start:end], where start is the starting index (inclusive), and end is the ending index (non-inclusive).

```python
my_list = [1, 2, 3, 4, 5]
number = my_list[3]    # number == 4
length = len(my_list)  # length == 5
new_list = my_list[2:4] # new_list = [3,4]
```

Another useful data structure is called a dictionary.

```python
my_dict = {'a': 1, 'b': 2, 'c': 3}
```
A dictionary contains entries which are key-value pairs. In the example above, a : 1 is a key-value pair where a is the key and 1 is the value. Just like in a normal dictionary, we can lookup a dictionary to retrieve the corresponding value of a key as such:

```python
my_dict = {'a': 1, 'b': 2, 'c': 3}
number = dic['b']  # number == 2
```

We can also add an entry to the dictionary as such:

```python
my_dict['d'] = 4
```
