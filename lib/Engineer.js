class Engineer extends Employee {

    constructor(name, ID, email, username, role) {

        super(name, ID, email);

        this.username = getGithub()

        this.role = getRole()
    }
}

Engineer.prototype.getGithub = function () {
    console.log('engineer getSchool run success')
}

Engineer.prototype.getRole = function () {
    return 'Engineer'
}

console.log(engineer)


module.exports = Engineer;