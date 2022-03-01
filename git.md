# Git

首次连接远程仓库，需要设置用户名和邮箱

```bash
git config -global user.name 'xxx'
git config -global user.email 'xxx.@qq.com'
// 查看配置信息
git config --list
```

电脑和github密钥配对

https://docs.github.com/cn/authentication

```bash
// 生成ssh密钥
ssh-keygen -t ed25519 -C "your_email@example.com"
// 后台启动ssh代理
eval "$(ssh-agent -s)"
>Agent pid 59566
// 查看配置文件
open ~/.ssh/config
// 配置文件内容如下
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
  
// 将ssh私钥添加到后台代理并将密码存储在密钥链中 
ssh-add -K ~/.ssh/id_ed25519
// 复制密钥 
pbcopy < ~/.ssh/id_ed25519.pub
// 添加到GitHub账号中

// 测试ssh链接
ssh -T git@github.com
```



```bash
// 注册修改
git add --all 
```

```bash
// 显示提交历史
// 部分输出 
git log -n 3 // 只显示该项目的最后三次提交
// 格式化输出
git log --oneline // 显示概述信息
// 统计修改信息
git log --stat // 显示被修改的那些文件
git log --dirstat // 显示被修改文件的目录
git log --shortstat // 显示项目中多少文件被修改，以及新增或者删除了多少文件
```

```bash
// 撤回修改
git reset HEAD(重置当前的HEAD版本) foo.txt(重置的文件或目录)
```

```bash
.gitignore 文件
// 以"/"结尾
generated/  // 代表包含这一名字的目录都包括在内

// 在开始也有"/"
/generated/  // 确切的文件目录
```



```bash
// 创建分支
git branch xxx
// 切换分支
git checkout xxx
// 创建后自动切换
git checkout -b xxx
// 删除分支
git branch -d xxx

1、HEAD 指向的 branch 不能删除。如果要删除 HEAD 指向的 branch，需要先用 checkout 把 HEAD 指向其他地方。
2、由于 Git 中的 branch 只是一个引用，所以删除 branch 的操作也只会删掉这个引用，并不会删除任何的 commit。
-----------------------------------------------------------------------
// 创建一个本地分支并且切换到该分支
git checkout -b 'xxx'
// 新建一个远程分支
git push origin xxx(分支名称)
-----------------------------------------------------------------------
// 本地分支和远程分支关联(可以不用 第一次push的时候执行)
// git版本太高的话此命令会报错
git branch --set-upstream  (远程分支名)origin/'xxx'(远程分支名字) 'xxx'(本地分支名) 
// 一般使用下面这条
git branch --set-upstream-to=origin/remote_branch  your_branch
-----------------------------------------------------------------------
// 基于某个分支创建新的分支
git checkout -b newBranch origin/oldBranch
-----------------------------------------------------------------------
// 删除分支
git branch -d 'xxx'
// 恢复分支
1、已知散列值时
git branch 'xxx'  '散列值'
2、未知散列值时
git reflog // 查看分支的散列值
git branch 'xxx' HEAD@{'x'}
```

![image-20211228113515969](/Users/swj/Library/Application Support/typora-user-images/image-20211228113515969.png)

git push

当输入git push是会进入vi模式 按下 i（小写） 键进入编辑模式，按esc返回到命令行模式，连续输入两个大写的z就保存退出。（按下：wq！）

```bash
git push 远程仓库名  分支名

// 创建分支后第一次push 
git push --set-upstream origin xxx(分支名)
```

git push 报错

![image-20211220105448425](/Users/swj/Library/Application Support/typora-user-images/image-20211220105448425.png)

**此时本地仓库落后于远程仓库，先pull再push**

```bash
git pull --all
```

```bash
偏离分支：
本地仓库落后于远程分支，本地又修改了项目，此时本地分支则为偏离分支
合并策略
快进合并：
git merge --ff-only
非快进普通合并
git merge --no-ff 'branch'(想要merge的分支)
变基合并
git merge --rebase
```

![image-20211220144630263](/Users/swj/Library/Application Support/typora-user-images/image-20211220144630263.png)

输入git pull 不带参数时 会出现上述警告 

不想出现上述警告 可以配置 

```bash
git config pull.ff false
// 使用当前的默认合并策略：先尝试快进合并，如果不行再进行正常合并生成一个新的提交
```

```bash
// merge 两种使用场景
1、合并分支 当一个分支开发完成，把分支合并
2、full的内部操作， full实际操作其实就是把远程仓库的内容fetch下来，用merge合并

特殊场景
1、发生冲突：
'fix conflicts and then commit the result'
解决冲突
手动提交：
先add，再commit

取消merge
git merge --abort

2、HEAD领先目标commit
merge是一个空操作
3、HEAD 落后于目标 commit：fast-forward。
```

```bash
git pull 
git merge xxx分支
```

查看提交记录

```bash
git log -p 
// 展示详细信息
git log --stat
// 查看简要统计

git show
// 查看具体commit的改动内容

// 查看暂存区和上一次提交的区别
git diff --staged
// 查看工作目录和暂存区的区别
git diff
```

合并代码前先提交一下pull request

