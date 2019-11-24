# Contributing

We adopeted English like official language to commits.

If you want to contribute with this project, follow this steps:

**1 -** [Run the project local](https://github.com/womenwhocoderecife/micropigmentacao-solidaria/README.md)

**2 -** Make a new branch as agreed by the team:

```sh
$ git checkout -b name-of-new-branch
```

**3 -** Work in the task and **remember** that is a good practices you make a commit immediately after a little modification;

**4 -** Add the modified and new files in staging area:

```sh
$ git add name-file1 name-file2
```

**5 -** Make a commit:

```sh
$ git commit -m "write a short and significant sentence"
```

**6 -** Update master branch of the local repository before send your contribution:

```sh
$ git checkout master
$ git pull
```

**7 -** Update your branch with the new commits from online repository:

```sh
$ git checkout name-of-new-branch
$ git rebase master
```

**7 -** Back to your branch and send your contribution to a online repository. Do this every day you work:

```sh
$ git push origin name-of-new-branch
```

**8 -** Go to [online repository](https://github.com/womenwhocoderecife/micropigmentacao-solidaria) and click on button "Compare and pull request"
![pullRequest]
[pullRequest]: https://github.com/womenwhocoderecife/micropigmentacao-solidaria/Assets/pull-request.jpg "Repository menu with a pull request suggest"

**9 -** Click on button "BLA" to request the review
![review]
[review]: "Box"