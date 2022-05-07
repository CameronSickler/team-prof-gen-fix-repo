class Employee {
    constructor(name, ID, email) {
        this.name = name
        this.ID = ID
        this.email = email
    }
}

Employee.prototype.getName = function () {
    console.log('getName run success')
}

Employee.prototype.getID = function () {
    console.log('getID run success')
}

Employee.prototype.getEmail = function () {
    console.log('getEmail run success')
}

Employee.prototype.getRole = function () {
    console.log('getEmail run success')
}