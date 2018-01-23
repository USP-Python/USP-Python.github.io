## Contributing
This project uses [MkDocs](http://www.mkdocs.org/) to generate a static site from simple markdown files. 

### via Github
Simple switch to the mkdocs branch (i.e. the current branch), and edit the relevant markdown files. Try to follow project markdown as well as python ([PEP8](https://www.python.org/dev/peps/pep-0008/)) conventions. 

There is no way to deploy your changes to the site through github.

### via Command Line
First, clone the directory, and switch to the mkdocs branch.
```
$ git clone git@github.com:USP-Python/USP-Python.github.io.git
$ cd USP-Python.github.io
$ git fetch origin mkdocs
$ git checkout mkdocs
```

You can then make your edits. To preview your changes locally, you will need to install the mkdocs module, as well as the mkdocs-material theme. Then, run the test script.
```
$ pip3 install mkdocs mkdocs-material
$ ./test.sh
```

Deploy the changes by running the deploy script. Never commit directly to the master branch. [**Please write good commit messages.**](https://github.com/erlang/otp/wiki/writing-good-commit-messages)

### Repository Access
Do contact [@ningyuansg](mailto:ningyuan@u.nus.edu) if you wish to be added as a collaborator. Otherwise, submit a PR.
