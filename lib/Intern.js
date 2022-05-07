class Intern extends Employee {

    constructor(name, ID, email, school) {

        super(name, ID, email);

        this.school = school
    }
}

Intern.prototype.getSchool() {
    console.log('intern getSchool run success')
}

Intern.prototype.getRole = function () {
    console.log('intern getRole run success')
}

var intern = new Intern('Dave', 5, 'dave@gmail.com', 'University of Wisconsin Madison');

console.log(intern)



// async function askInternQuestions() {

//     const answers = await inquirer.prompt(internQuestions);
//     const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
//     console.log(intern);
//     return intern;
// }

module.exports = askInternQuestions;