#git commands

## create a new branch and switch branch
- inspect branchs:`git branch`
- `git branch [branch]`
- `git checkout [br]`
- shorthand: `git checkout -b [branch]`
- delete branch：git branch -d <name>

## merge branch to master 
- switch to master: `git checkout master`
- `git merge [branch]`

## Git Rebase(same with merge?)
- you are already in a new branch
- `git rebase master`
- `git checkout master`
- `git rebase [branch]

## HEAD
- switch head `git checkout [commit id]`

## Relative Refs
- move upward once `[commit name]^` goback to last commit
- move upwards nums `HEAR~4` goback to last 4th commit
- `git branch -f master HEAD~3`

## Reversing Changes in Git
- `git reset & git revert`
- `git reset HEAD~1` will move a branch backwards as if the commit had **never been made** in the first place.(used in local, no one can see your change)
- `git revert HEAD` it will create a new commit below the commit you want to revert, used in remote(you can share your change with others)

# Remote part

## Git Clone
- `git clone <repository>`
- `git checkout o/master git commit`

## Git Fetch
- `git fetch` update local repository but it won't change your local stuff

## Git Pull
- `git pull = git fetch && git merge <branch>`

## Simulating collaboration
- `git fakeTeamwork` plop down a commit on master
- `git fakeTeamwork foo 3` specify the number of commits

## Git Push
- `git push` push your local repository to remote

## Diverged Work
- `git fetch`
- `git rebase <branch>`or `git merge <branch>`
- `git push`
- easy way: `git pull --rebase`/`git pull` + `git push`

## teamwork with git
- 首先，可以试图用`git push origin branch-name`推送自己的修改；

- 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

- 如果合并有冲突，则解决冲突，并在本地提交；

- 没有冲突或者解决掉冲突后，再用`git push origin branch-name`推送就能成功！

- 如果`git pull`提示`“no tracking information”`，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream branch-name origin/branch-name`。


## tags
- 命令git tag <name>用于新建一个标签，默认为HEAD，也可以指定一个commit id；

- git tag -a <tagname> -m "blablabla..."可以指定标签信息；

- git tag -s <tagname> -m "blablabla..."可以用PGP签名标签；

- 命令git tag可以查看所有标签。

- 命令git push origin <tagname>可以推送一个本地标签；
- 命令git push origin --tags可以推送全部未推送过的本地标签；
- 命令git tag -d <tagname>可以删除一个本地标签；
- 命令git push origin :refs/tags/<tagname>可以删除一个远程标签。

