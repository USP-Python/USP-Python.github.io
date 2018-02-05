```python
def sum(x, y):
    return x + y
```

This is a function. We use the keyword "def" to start off the function, followed by the name of the function (in this case, "sum").
Within the brackets, we specify the parameters or inputs to the function. We use the keyword "return" to specify the outputs of the function.

To use a function, or perform what we call a function call, we could write:

```python
a = sum(3, 4)
```

This assigns the value of sum(3,4), which is 7, to the variable a.

Unlike in maths, however, functions in python do not need to have inputs and outputs. So, this is also a valid function:

```python
def say_hi():
    print("hi")
```

Functions are an important tool that allows us to organise our code and package sets of instructions which perform a specific task.
Once we have defined a function, we will be able to use it in multiple places. We can also use functions that other people have written in our code.

For example, let's say that we have downloaded some data off an excel file (csv file) named "numbers.csv" as a list of lists, with each sublist representing a row.

```python
import csv

# A function that we can use to read in any csv file
def readcsv(filename):
    output = []
    with open(filename) as file:
        data = csv.reader(file)
        for row in data:
            output.append(row)
    return output

output = readcsv("numbers.csv")

# Notice you don't need to know how the function works to use it. You only need to know what to input, and what it does, which is read off a csv file such that:
# output = [ [1,2,3,4], [5,6,7,8], [2,3,4,5], ... ]
```

We can use the predefined sum() and max() function in python to find the sum of values in a list. So, we can write a function that takes in this input and finds the maximum value out of all the data.

```python
def max_val(input):
    newlst = []
    for lst in input:
        newlst = newlst + [sum(lst)]
        # A more convenient way to write this is: newlst.append(sum(lst))
    return max(newlst)
```
To consolidate what we've learnt so far, let's try out writing two functions.

Firstly, suppose we want to write a function freq_dic() that takes in a paragraph and outputs a dictionary of word frequencies. So, each key in the dictionary is a word in the paragraph, and the value is the number of times the word appears in the paragraph. For example,

```python
para = "the cat on the hat is eating the rat on the mat"
dic = freq_dic(para)
# dic = {'the': 4, 'cat': 1, 'on': 2, 'hat': 1, 'is': 1, 'eating': 1, 'rat': 1, 'mat': 1}
```
For this exercise, we will use the method .split() to split the paragraph into a list of words. For example:

```python
string = "I don't eat fish"
lst = string.split()
# lst = ['I', "don't", 'eat', 'fish']
```

Solution:
```python
def freq_dic(para):
    words = para.split()
    dic = {}
    for w in words:
        if w not in dic:
            dic[w] = 0
        dic[w] += 1  # dic[w] = dic[w] + 1
    return dic
```

Next, let's say we download some data off a website and get this dictionary. We want to find all the choices that don't have fish in the menu, and output the options in a list. Try writing this function find_no_fish(dict) yourself!

```python
meals = {
    'noodle'    :   'SEAFOOD IPOH HOR FUN',
    'asian'     : '''WHITE & BROWN RICE
                     SOY BRAISED CHICKEN WING X 2
                     FISH IN PINEAPPLE SAUCE
                     SCRAMBLED EGG W/ TOMATO SAUCE
                     CHYE SIM W/ GARLIC
                     CARROT & CORN SOUP''',
    'western'   : '''CREAM OF CARROT
                     ROASTED BEEF STEAK W/ HERB BROWN SAUCE
                     MASHED POTATO
                     MIXED BEANS & MUSHROOM''',
    'indian'    : '''DAL
                     PANEER KADAI
                     CHANA MASLA
                     VEG JALFREZZI
                     CHICKEN MASALA
                     TOMATO RICE''',
    'malay'     : '''BAKED CHICKEN SERVED W/ MUSHROOM SAUCE
                     WEDGES
                     EGGPLANT W/ TOMATO PASTE''',
    'vegetarian': '''STEAMED BEANCURD W/ MUSHROOM GRAVY
                     SPRING ROLLS
                     LO HAN CHAI
                     STIR FRIED SWEET POTATO LEAVES'''
}
```

Solution:
```python
def find_no_fish(dic):
    result = []
    for option in dic:
        if "FISH" not in dic[option].split():
            result.append(option)
    return result
```
