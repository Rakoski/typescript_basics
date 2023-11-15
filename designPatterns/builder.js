class Address {
    constructor(cep, street) {
        this.cep = cep
        this.street = street
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

const builder = new UserBuilder('Mateus')
const user = builder.setAddress(new Address('12345-678', 'Avenida Getúlio Vargas')).build()
console.log(user)