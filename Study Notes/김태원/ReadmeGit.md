# Git
## 1. Git은 뭘까요?
git은 분산 버전 관리 시스템입니다.
- local
    - working directory
    - stage area
    - local repo

- remote
    - remote repo
<p>
local 영역과 remote 영역으로 구분되며 작업한 내용을 스테이지에 올려서 로컬 저장소(local)에 커밋하고, 이를 푸시해서 원격 저장소(remote)로 보냅니다.</P>

```HTML
git init (현재 작업하고 있는 장소를 working directory로 만드는 것) 
git add (작업한 파일들을 stage area에 보내는 것)
git commit -m "커밋 코멘트" (stage are의 파일을 local repo로 파일들을 보내는 것)
```


<br>

## 2. Git과 github의 차이는 뭘까요?
git은 버전 관리를 하는 프로그램, github는 git 서비스를 원활하게 이용하기 위한 서비스입니다. git은 github외에도 ,gitlab등 다양한 서비스를 활용할 수 있습니다. 
> git이 카메라 어플이라면, github는 유투브라고 생각하면 편합니다! 

<Br>

## 3. Git에 "HEAD"는 뭘 뜻할까요?
다른 버전 관리 시스템과는 달리 Git은 'HEAD’라는 특수한 포인터가 있습니다. 이 포인터는 지금 작업하는 로컬 브랜치를 가리킵니다. 

<br>

## 4. Git branch는 어떻게 사용하나요?
커밋을 단위로 구분된 소스코드 타임라인에서 분기해서 새로운 커밋을 쌓을 수 있는 가지를 만드는 것, 혹은 그 가지를 브랜치라 합니다.

새로운 가지를 만들어 시범서비스를 도입한 후 후에 마스터 브랜치에 합칠 수 있습니다. 이 때, merge를 사용해 여러 가지의 출처를 살리며 합칠 수 있고 rebase를 통해 깔끔한 한 줄의 가지로 합칠 수도 있습니다.
```Javascript
git merge
git rebase
```

<Br>

## 5. Merge는 어떻게 하나요?
```Javascript
git merge [기존 브랜치 이름] : 현재 브랜치에 다른 브랜치를 머지
```