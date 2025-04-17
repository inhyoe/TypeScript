class Person2 {
  public name: string; // 어디서나 접근 가능
  protected age: number; // 서브클래스에서만 접근 가능
  private ssn: string; // 해당 클래스 내부에서만 접근 가능
  readonly country: string = "KR"; // 초기화 이후 변경 불가

  constructor(name: string, age: number, ssn: string) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }

  public introduce(): void {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    this.printAge(); // private 메서드도 내부에서 호출 가능
  }

  protected printAge(): void {
    console.log(`나이: ${this.age}세`);
  }

  private getSsn(): string {
    return this.ssn;
  }
}

// 서브클래스에서 protected 멤버 접근
class Employee extends Person2 {
  private department: string;

  constructor(name: string, age: number, ssn: string, dept: string) {
    super(name, age, ssn);
    this.department = dept;
  }

  public showProfile(): void {
    console.log(`이름: ${this.name}`); // OK (public)
    console.log(`부서: ${this.department}`); // OK (private but within Employee)
    this.printAge(); // OK (protected)
    // console.log(this.ssn);               // ❌ Error: ssn은 private
    // console.log(this.getSsn());          // ❌ Error: getSsn()은 private
  }
}

const p = new Person2("유창훈", 30, "123-45-6789");
console.log(p.name); // OK
// console.log(p.age);        // ❌ Error: age는 protected
// console.log(p.ssn);        // ❌ Error: ssn은 private
console.log(p.country); // OK (readonly)
// p.country = "US";          // ❌ Error: country는 readonly

p.introduce(); // OK

const e = new Employee("김철수", 28, "987-65-4321", "개발팀");
e.showProfile();
