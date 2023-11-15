// target interface expected by the client
interface Target {
    request(): void;
}

// the class that needs to be adapted
class Adaptee {
    specificRequest(): void {
        console.log("Adaptee's specific request");
    }
}

class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): void {
        console.log("Adapter's request");
        this.adaptee.specificRequest();
    }
}

function clientCode(target: Target): void {
    target.request();
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

clientCode(adapter);
