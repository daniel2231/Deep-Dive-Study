# JS로 서버도 만들 수 있다고??

## Node.js란?

사전적인 정의를 가져오면:
> Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. (Node.js 공식 사이트)

여기서 런타임이란?
> 프로그래밍 언어가 구동되는 환경

이걸 종합해보면, JavaScript가 구동될 수 있는 환경이라는 걸 알 수 있습니다.

사실 자바스크립트는 브라우저 밖에서 구동될 수 없었습니다.

하지만 Ryan Dahl이라는 사람이 2009년에 Node.js를 공개함으로써 JavaScript를 브라우저 밖에서도 쓸 수 있게 되었습니다.

JavaScript를 밖에서 사용할 수 있게 되면서, 우리는 컴퓨터의 File System도 이용할 수 있고, 크롤링도 할 수 있으며, 서버도 만들 수 있게 되었습니다.

오늘은 Node.js와 Express라는 라이브러리를 써서 간단한 웹 서버를 만들어 볼 겁니다.

## Node.js의 특징

- 비동기 I/O 처리
- 이벤트 기반
- 빠른 속도
- 쓰레드 기반

Node.js는 비동기식으로 라이브러리 내의 API가 설계되어 있습니다. 이벤트기반이기 때문에 멈추지 않고 계속 돌아간다는 뜻인데, 어떤 API가 실행되면 그게 끝날때까지 기다리는게 아니라, 바로 다음 API로 넘어갑니다. 처음에 시작된 API가 값을 변환하면 이벤트 루프가 다시 이 값을 받아옵니다. 이렇게 때문에 실시간 통신이 필요한 서비스, SPA, 또는 확장성이 필요한 서비스를 개발할 때 주로 사용됩나다.

단, 싱글 쓰레드, 즉 한 통로만 사용하기 때문에 어떠한 작업이 시간이 많이 걸리면 전체 시스템의 성능이 떨어짐으로 CPU를 많이 써야 하는 서비스면 Node.js를 권장하지 않습니다.

## Express.js란?

아까 우리는 Node.js를 이용해 웹 서버를 만들 수 있다는 걸 알 수 있었습니다. 

허나, Node.js 만으로 웹 서버를 만들려면 시간이 오래 걸릴 수도 있습니다. 따라서 우리는 Express.js라는 프래임워크를 이용해 조금 쉽게 서버를 만들어볼 예정입니다.

쉽게 이야기해서, Express.js는 Node.js를 쉽고 빠르게 개발을 할 수 있도록 도와주는 친구이며, 미들웨어라는 구조를 가지고 있어 개발자들이 필요한 것만 선택해서 쓸 수 있도록 해줍니다.

## Node.js와 Express.js 설치하기

**Node 설치 방법**

[설치 링크](https://nodejs.org/ko/download/)

**Express 설치 방법**

```bash
npm install express --save
```

## Express를 이용하여 웹 서버 만들기

```javascript
// server.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

let router = require("./router");
app.use(router);

app.listen(port, () => {
  console.log(`server is listening in port: ${port}`);
});

//router.js
let express = require('express');
let router = express.Router();
const viewPath = './views/';

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'index.html', { root: __dirname });
});


module.exports = router;
```