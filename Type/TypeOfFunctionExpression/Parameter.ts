function sum(a: number, b?: number): number {
  // 선택적 매개 변수
  return a + (b ?? 0);
}
sum(10, 20); // 30
sum(10); // 타입 에러 없음

function sum2(a: number, b = 100): number {
  // 매개변수 기본 값이 있으면 굳이 인자 타입을 선언하지 않아도 된다 (타입 추론)
  return a + b;
}
sum2(10, undefined); // 110
sum2(10); // 110
sum2(10, 10); // 20
