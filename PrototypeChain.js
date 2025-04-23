const person = {
    greet: function () {
        console.log('hello')
    }
}

const student = {
    name: 'razi'
}

student.__proto__ = person
student.greet()