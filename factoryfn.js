function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log('hii', this.name, this.age)
        }
    }
}
const user1 = createUser('razi', 19)
user1.greet()