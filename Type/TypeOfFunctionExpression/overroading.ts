function add(a: string, b: string): string; // 오버로드 함수 선언
function add(a: number, b: number): number; // 오버로드 함수 선언
function add(a: any, b: any): any {
  // 오버로드 함수 실행부 (any를 써준다)
  return a + b;
}

add("hello ", "world~");
add(1, 2);
function join2(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return { name, age };
  } else {
    return "나이는 숫자로 입력해 주세요";
  }
}
// const sma2: User = join2("Sam", 30);
// const jame2: string = join2("Jane", "30"); 에러가 발생

function join(name: string, age: number): User;
function join(name: string, age: string): string;
function join(name: any, age: any): any {
  if (typeof age === "number") {
    return { name, age };
  } else {
    return "나이는 숫자로 입력해 주세요";
  }
}

const sma: User = join("Sam", 30);
const jame: string = join("Jane", "30");

const jame2: string = join(123, "30"); // ERROR !!!
