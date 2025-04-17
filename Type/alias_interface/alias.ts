//alias = type literal

type User = {
  name: string;
  age: number;
};
// Type alias for a User object
let userA: User = { name: "John", age: 30 };

/*
  Error  
  let userA: User = { name: "John", age: 30, email: abc@naver.com };
 */



