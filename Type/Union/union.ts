type Person = {
  name: string;
  age: number;
};

type Developer = {
  name: string;
  skill: string;
};

// 두 타입중 에러를 발생시키지 않기 위해 공통된 속성만 사용해야 한다.
function introduce(someone: Person | Developer) {
  someone.name; // O 정상 동작
  someone.age; // X 타입 오류
  someone.skill; // X 타입 오류
}
