export interface PaymentProcessor {
  pay(amount: number): Promise<void>;
}

// 2) 구체 구현
export class StripeProcessor implements PaymentProcessor {
  async pay(amount: number) {
    console.log(`Stripe로 결제: ${amount}원`);
    // …Stripe SDK 호출
  }
}

export class PayPayProcessor implements PaymentProcessor {
  async pay(amount: number) {
    console.log(`PayPay로 결제: ${amount}원`);
    // …Stripe SDK 호출
  }
}

// 3) 소비 코드는 PaymentProcessor만 알고 있음
export class OrderService {
  constructor(private processor: PaymentProcessor) {}

  async checkout(amount: number) {
    await this.processor.pay(amount);
    console.log("주문 완료");
  }
}

// 4) 실제 주입
const stripe = new StripeProcessor();
const svc = new OrderService(stripe);
const stripe2 = new PayPayProcessor();
const svc2 = new OrderService(stripe2);
svc.checkout(10000);
svc2.checkout(10000);
