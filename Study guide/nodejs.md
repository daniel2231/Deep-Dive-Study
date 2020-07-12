# node.js 스터디 가이드

해당 키워드에 대해 공부해오고 스터디 노트를 남겨 주세요. 아래에 있는 node.js와 express를 사용한 코드를 보시고 공부하셔도 됩니다.

1. node.js는 뭘까요?
2. node.js는 동작 방식에 대해서 알아보세요.
3. JavaScript의 모듈은 뭐고 어떻게 사용하는 걸까요?
4. runtime이 뭐고 node.js에는 어떤 역할을 할까요?
5. express는 뭘까요?
6. Merge는 어떻게 하나요?
7. HTTP의 GET에 대해서 한번 알아보세요!

아래의 코드를 반만 알아들어도 충분합니다!
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

## 추천 자료들

[[Node.JS] 노드는 무엇이고 어떠한 기능들이 있는가?](https://medium.com/day34/node-js-%EB%85%B8%EB%93%9C%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%96%B4%EB%96%A0%ED%95%9C-%EA%B8%B0%EB%8A%A5%EB%93%A4%EC%9D%B4-%EC%9E%88%EB%8A%94%EA%B0%80-1-98e49e1100ab)

[[Node.JS] 강좌 01편: 소개](https://velopert.com/133)

[Runtime이란?](https://asfirstalways.tistory.com/99)

[Express.js란 무엇인가 (Javascript 백엔드 프레임워크)](https://siner308.github.io/2020/01/03/express-introduction/)

[GET과 POST의 차이](https://blog.outsider.ne.kr/312)