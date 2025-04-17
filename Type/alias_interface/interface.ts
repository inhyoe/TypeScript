
interface IUser {
  name: string;
  age: number;
  email?: string; // Optional property
}

const exampleUser: IUser = {
  name: "Jane",
  age: 25,
  email: "abc@naver.com",
};
