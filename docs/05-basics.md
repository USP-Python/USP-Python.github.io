A data structure is something we use to store values. A list is an important in-built data structure in python, which we represent using square brackets:

```python
list = [1,2,3,4,5]
```

We can access the contents of a list using indices, just like we did for strings. We can also find the length of the list using len. 

```python
list = [1,2,3,4,5]
number = list[3] #number = 4
length = len(list) #length = 5
```
Let's now try writing a function to find the average of the values in a list.

```python
def average(list):
    sum = 0
    for x in list:
        sum = sum + x
    result = sum / len(list)
    return result
```
Now, try writing a function that will find you the largest value in a list. 

Another useful data structure is called a dictionary.

```python
dictionary = {a : 1, b : 2, c : 3}
```
A dictionary contains entries which are key-value pairs. In the example above, a : 1 is a key-value pair where a is the key and 1 is the value. Just like in a normal dictionary, we can lookup a dictionary to retrieve the corresponding value of a key as such:

```python
dic = {a : 1, b : 2, c : 3}
number = dic[b] #number == 2
```

We can also add an entry to the dictionary as such:

```python
dic[d] = 4
```
We can also convert a dictionary into a list as such:

```python
dic = {a : 1, b : 2, c : 3}
items = dic.items()
#items = [(a,1), (b,2), (c,3)]
```
After using .items(), we have converted the dictionary into a list containing each entry in a tuple. A tuple using round brackets, and is like a list except that the values in the tuple cannot be changed. 
This is useful if we want to loop through a dictionary, for example to find a particular key. Let's write a function that will take a dictionary, and give us a list of all the keys that have integer values that are greater than 3. 

```python
def findkeys(dic):
    dic = dic.items()
    result = []
    for x in dic:
        if x[1] > 3:
            result = result + [x[0]]
    return result
```

Let's say we download some data off a website and get this dictionary. We want to find all the choices that don't have fish in the menu. Try writing that function yourself!

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

