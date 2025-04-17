# 설치

## 타입스크립트 컴파일러

- 타입스크립트는 자바스크립트와 달리 타입을 명시하여 사용하기 때문에 별도의 컴파일러가 필요함

```SHELL
> npm i -g typescript

> npm install -g typescript@2.7.2 # 버전 명시 혹은
> npm install -g typescript@latest
```

- 그리고 ./Test 파일에 Test.js 파일을 생성한 후 다음과 같이 작성

```ts
const message: string = "Hello World";
console.log(message);
```
- 그러면 ts 파일이 js 파일로 변환됨.


