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

**8 -** Send your contribution to online repository. Do this every day you work:

```sh
$ git push origin name-of-new-branch
```

**9 -** Go to [online repository](https://github.com/womenwhocoderecife/micropigmentacao-solidaria) and click on button "Compare and pull request"
![pullRequest]
[pullRequest]: https://github.com/womenwhocoderecife/micropigmentacao-solidaria/assets/pull-request.png "Repository menu with a pull request suggest"

**10 -** Make the pull request and let the reviewer know (click on the highlighted buttons)
![review]
[review]: https://github.com/womenwhocoderecife/micropigmentacao-solidaria/Assets/review.png 