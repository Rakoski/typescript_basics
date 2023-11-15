interface PaymentStrategy {
    pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
    private cardNumber: string;
    private expirationDate: string;

    constructor(cardNumber: string, expirationDate: string) {
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
    }

    pay(amount: number): void {
        console.log(`Paid $${amount} with credit card ${this.cardNumber}`);
    }
}

class PayPalPayment implements PaymentStrategy {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    pay(amount: number): void {
        console.log(`Paid $${amount} with PayPal using email ${this.email}`);
    }
}

class ShoppingCart {
    private paymentStrategy: PaymentStrategy;

    constructor(paymentStrategy: PaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

const creditCardStrategy = new CreditCardPayment("1234-5678-9012-3456", "12/24");
const payPalStrategy = new PayPalPayment("example@example.com");

const cart1 = new ShoppingCart(creditCardStrategy);
cart1.checkout(100);

const cart2 = new ShoppingCart(payPalStrategy);
cart2.checkout(50);
