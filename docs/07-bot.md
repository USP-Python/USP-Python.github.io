The next thing we are going to do is to make our bot respond to commands. To start off, we need to initialise the updater. 

```python
from telegram.ext import Updater
updater = Updater(token='YOUR TOKEN HERE')
dispatcher = updater.dispatcher
```

The crucial part is defining the functions that allows us to specify what the bot does upon receiving a command. 
The function should contain the parameters bot and update so that you can reference the bot and the update within the function definition. 

```python
def start(bot, update):
    message = "Hello, " + update.message.from_user.first_name
    bot.send_message(chat_id=update.message.chat_id, text=message)
```

Next, we have to create a CommandHandler and then add it to the dispatcher. 

```python
from telegram.ext import CommandHandler

start_handler = CommandHandler("start", start)
# create a CommandHandler that responds to the command "/start" and runs the function start
dispatcher.add_handler(start_handler)
# add this handler to the dispatcher
```

Finally, to get our bot to start running, we write the following lines:

```python
updater.start_polling()
updater.stop()
```

Now, let's try to write a CommandHandler that can take in some user input. To do this, when creating our CommandHandler, we must set pass_args to True (this is an optional parameter).
The function will then receive the user input as a list of values seperated by spaces. For example, if we type "/add 2 2" to our bot, it will take in args as a list [2, 2]. 

```python
def add(bot, update, args):
    # args is a list [1st no, 2nd no]
    first_no = int(args[0])
    second_no = int(args[1])
    number = first_no + second_no
    result = number * number
    bot.send_message(chat_id=update.message.chat_id, text=str(result))

sum_handler = CommandHandler("add", add, pass_args=True)
dispatcher.add_handler(sum_handler)
```

Now, try writing a handler that will raise the first number to the power of the second, using a while loop (do not use \*\*). For example, if I type `/power 2 4`, the bot should say 16. 
