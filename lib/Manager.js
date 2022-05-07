class Manager extends Employee {

    constructor(name, ID, email, officeNumber, role) {

        super(name, ID, email);

        this.officeNumber = officeNumber

        this.role = getRole()
    }
}

Manager.prototype.getRole = function () {
    return 'Manager'
}

console.log(manager)


module.exports = Manager;