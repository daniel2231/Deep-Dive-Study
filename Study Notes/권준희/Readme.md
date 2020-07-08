# **GIT ?**

## **'git을 쓰는 이유'**
코드는 항상 수정되는 것이기 때문에 각 시점의 코드를 저장해놓을 필요가 있다. 

그리고 각 시점을 사진찍어 놓는 역할을 하는 것이 바로 git이다. 

코드를 저장해놓으면 
1. 이전 상태로 코드를 되돌리고 싶을 때
2. 코드가 날라갔을 때
3. 이전의 코드를 참조하고 싶을 때 

등등의 경우에 유용하게 활용할 수 있다.


## **git의  3가지 영역, 단계**

git은 3가지 영역이자 단계로 구성되어있다. 

1. 사용자가 실제로 코드를 수정하는 **Working directory** (git이 알 수 없다)
2. 사용자가 수정한 코드를 올려놓는 **Stage Area** (git이 변경사항들을 체크한다=Track!)
3. Stage Area에 올려놓은 파일들을 저장(commit)하는 저장소인 **Repository** 

## **git 의 기본적인 명령어들 !**

~~~ 
git init --> (git을 깨운다, 시작한다)
git add . --> (Working directory에 있는 모든 파일들을 Staging Area에 올려놓는다)
git add file.txt --> (Working directory에 있는 file.txt라는 파일을 Stageing Area에 올려놓는다)
git commit -m "blah blah" --> (Staging Area에 올려놓은 파일들을 "blah blah"라는 이름으로 git의 Repository에 저장한다)
git status --> (git에 의해 관리되고 있지 않은 파일(untracked)들과 Stage에 올라와 있고, git에 의해 관리되고 있는 파일(tracked)의 변경사항을 보여준다)
git log --> (지금까지 commit한 기록들을 보여준다)
~~~
