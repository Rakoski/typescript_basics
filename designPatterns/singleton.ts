class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public showMessage(): void {
        console.log("Hello, Singleton!");
    }
}

const singleton1 = Singleton.getInstance();
singleton1.showMessage();

const singleton2 = Singleton.getInstance();

// as duas instâncias deveriam ser as mesmas
console.log(singleton1 === singleton2);
