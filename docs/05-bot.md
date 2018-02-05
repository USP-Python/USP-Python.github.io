The Python language comes with a wide array of packages. These packages (aka modules) contains pre-built functions available to the user just by `import`-ing. These packages are developed and maintained by a large group of active and supportive contributors. These packages are available to all Python developers to use under open source license terms. There are currently 128606 packages available to date. You may refer to this [website](https://pythontips.com/2013/07/30/20-python-libraries-you-cant-live-without/) for popular Python packages. 

### `pip install`

`pip` is the preferred installer program and starting with Python 3.4, it is included by default together with Python binary installers. 

You can check whether pip is installed or check its current version through your terminal. Simply type the following:

```
pip --version
```

You should get the following response:

```
pip 9.0.1 from c:\users\...\python\python36\lib\site-packages (python 3.6)
```

For Windows: 
In the event that pip is not installed, save this folder: [get-pip.py](https://bootstrap.pypa.io/get-pip.py)

For Mac:
Enter the following in the terminal:

```
sudo easy-install pip
```

Double click on the file. Your local Python interpreter would run the file and install pip. After doing so, check whether pip is installed by running the above command again. 

### Installing a Package/Module

To install any Python package, simply open your terminal and run the following command:

```
pip install module_name
```

For this workshop we will be using the `python-telegram-bot` package, so we will key in the following:

```
pip install python-telegram-bot
```

You can check all installed packages and the respective version by running the following commands:

```
pip freeze
```
