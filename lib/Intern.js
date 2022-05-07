class Intern extends Employee {

    constructor(name, ID, email, school, role) {

        super(name, ID, email);

        this.school = getSchool()

        this.role = getRole()
    }
}

Intern.prototype.getSchool = function () {
    console.log('intern getSchool run success')
}

Intern.prototype.getRole = function () {
    return 'Intern'
}

console.log(intern)

module.exports = Intern;