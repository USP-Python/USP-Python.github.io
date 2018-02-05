Let's now learn how to create a MessageHandler that responds not to commands, but to all messages.

As before, we have to define a function which we use to create a MessageHandler. 

```python
def echo(bot, update):
    bot.send_message(chat_id=update.message.chat_id, text=update.message.text)
    # text = update.message.text here because we want to retrieve the text from the original message and send the same thing back

from telegram.ext import MessageHandler, Filters
echo_handler = MessageHandler(Filters.text, echo)
# instead of a string to specify a command name, now we use Filters.text to filter out all text based messages
dispatcher.add_handler(echo_handler)
```

Start polling the updater with updater.start_polling(), and your bot should now echo everything you say back to you.

This isn't very interesting, unless your goal is to spam a group (in which case they will have your bot removed immediately). 
So let's try to add some "interesting" functionality.

Firstly, let's try to create a MessageHandler that will send a message "FOOD!!" everytime someone mentions a food. For this, we will assume that we have a list of food that involves only 3 items:

```python
food_list = ["fish", "rice", "sushi"]

def find_food(bot, update):
    words = update.message.text.split()
    for i in words:
        if i in food_list:
            bot.send_message(chat_id=update.message.chat_id, text="FOOD!!")
```

Next, let's write a MessageHandler that reverses the words in your message and echoes it back, with a ", haha &lt;person's name&gt;" at the back. So for example, if John writes "Colourless green ideas sleep furiously" in the chat, the bot should say "furiously sleep ideas green Colourless, haha John".

```python
def reverse(bot, update):
    words = update.message.text.split()
    output = ""
    for i in words:
        output = " " + i + output
    output = output[1:]
    output = output + ", haha " + update.message.from_user.first_name
    bot.send_message(chat_id=update.message.chat_id, text=output)
```
