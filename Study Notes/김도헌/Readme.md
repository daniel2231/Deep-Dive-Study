# MarkDown

## 1. git은 뭘까요?
git은 형상관리도구 중 하나로 버전관리 시스템이라고도 한다. 
git은 소스코드를 여러 개발 PC와 저장소에 분산해서 저장
그렇기 때문에 중앙 서버에 장애가 발생해도 로컬 저장소에 커밋을 할 수 있으며, 
로컬 저장소들을 이용하여 중앙 저장소의 복원도 가능하다.

## 2. git과 github의 차이는 뭘까요?
git은 지역 저장소를 만들고 파일, 코드 등을 관리할 수 있다.
github는 로컬에서 git으로 관리하는 자료를 다른 사람과 공유하거나 백업해둘 수 있는 웹사이트 입니다.
뿐만 아니라 다른 사람이 github에 올린 자료를 복제 할 수 있고,어떤 커밋을 했는지 확인할 수 있다.
git으로 관리하는 파일들을 백업해둘 수 있습니다. 또, 다른 사람과 공동의 프로젝트를 협업할 때 github를 통해 공유하고 
서로의 코드를 가져오고 붙일 수 있는데에 유용한 공유 공간이 됩니다.

## 3. git에 "HEAD"는 뭘 뜻할까요?
'HEAD’라는 특수한 포인터가 있다. 이 포인터는 지금 작업하는 로컬 브랜치를 가리킨다. 

## 4. git branch는 어떻게 사용하나요?
git branch <브랜치 이름> 명령어를 통해 branch를 생성할 수 있다. 
git checkout <브랜치 이름>을 명령어를 통해 생성된 branch로 이동해
작업을 할 수 있다. 이 경우에 브랜치에만 변경 사항이 적용되며 master에는 적용되지 않는다.

## 5. Merge는 어떻게 하나요?
git merge<브랜치 이름> 명령어를 통해 브랜치와 마스터의 코드를 합칠 수 있다. 

## 꼭 알아야할 명령어들 
git init: 현재 디렉토리를 working directory로 설정하고 그 안에 레포지토리 생성

git add <파일이름>: 특정 파일을 staging area에 올리기

git add .:working directory 내의 모든 파일들을 staging area에 올리기

git commit -m "커밋할 내용": 현재 staging area에 있는 것들 메세지와 함께 커밋으로 남기기

git clone <repository 주소>: GitHub에 있는 프로젝트를 내 컴퓨터로 가져오기

git push origin master: 현재 브랜치인에서 원격저장소로 저장하는 것

git pull origin master: 원격저장소에서 현재 로컬 브랜치로 데이터를 가져오는 것

git branch <브랜치 이름>: 새로운 브랜치를 생성

git checkout <브랜치 이름>: 해당 브랜치로 이동

git merge <브랜치 이름>: 현재 브랜치에 다른 브랜치를 머지

git log: 히스토리를 출력

git status: 현재 파일들의 상태를 출력한다.
  untracked, modified, staged, unmodified 
