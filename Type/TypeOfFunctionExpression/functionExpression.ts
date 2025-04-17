// 함수 선언식
function fun1(a: number, b: number): number {
  return a + b;
}

// 함수 표현식
let fun2 = function (a: number, b: number): number {
  return a + b;
};

// 화살표 함수
let fun3 = (a: number, b: number): number => {
  return a + b;
};

// 변수에 함수를 선언 후 할당

let fun4: (a: number, b: number) => number;
fun4 = function (a: number, b: number): number {
  return a + b;
};

// let fun5 = function (a: number, b: number) => number; // ERR 화살표 함수만 가능 

//와 매우 극혐;;
let fun6: (a: number, b: number) => number = ( x, y) => {return x + y}; // 화살표 함수

