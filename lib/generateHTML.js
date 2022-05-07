function createManager(managersArray) {

    var returnManager = '';

    for (i = 0; i < managersArray.length; i++) {

        returnManager += `
        <div class="col-sm-6 p-3">
        <div class="card shadow-lg">
            <div class="card-body bg-primary">
                <h5 class="card-title text-white">MANAGER</h5>
                <h6 class="card-subtitle mb-2 text-white">${managersArray[i].name}</h6>
            </div>

            <div class="card-body bg-secondary bg-opacity-10">
                <p class="card-text">ID: ${managersArray[i].ID}</p>
                <p class="card-text">Office Number: ${managersArray[i].officeNumber}</p>
                <p class="card-text">Email: <a href="#" class="card-link">${managersArray[i].email}</a> </p>
            </div>
        </div>
    </div>
    `
    }

    return returnManager
}

function createEngineer(engineersArray) {

    var returnEngineer = '';

    for (i = 0; i < engineersArray.length; i++) {

        returnEngineer += `
        <div class="col-sm-6 p-3">
        <div class="card shadow-lg">
            <div class="card-body bg-primary">
                <h5 class="card-title text-white">ENGINEER</h5>
                <h6 class="card-subtitle mb-2 text-white">${engineersArray[i].name}</h6>
            </div>

            <div class="card-body bg-secondary bg-opacity-10">
                <p class="card-text">ID: ${engineersArray[i].ID}</p>
                <p class="card-text">Username: <a href="#" class="card-link">${engineersArray[i].username}</a> </p>
                <p class="card-text">Email: <a href="#" class="card-link">${engineersArray[i].email}</a> </p>
            </div>
        </div>
    </div>
    `
    }

    return returnEngineer
}

function createIntern(internsArray) {

    var returnIntern = '';

    for (i = 0; i < internsArray.length; i++) {

        returnIntern += `
            <div class="col-sm-6 p-3">
            <div class="card shadow-lg">
                <div class="card-body bg-primary">
                    <h5 class="card-title text-white">INTERN</h5>
                    <h6 class="card-subtitle mb-2 text-white">${internsArray[i].name}</h6>
                </div>
    
                <div class="card-body bg-secondary bg-opacity-10">
                    <p class="card-text">ID: ${internsArray[i].ID}</p>
                    <p class="card-text">School: ${internsArray[i].school}</p>
                    <p class="card-text">Email: <a href="#" class="card-link">${internsArray[i].email}</a> </p>
                </div>
            </div>
        </div>
        `
    }

    return returnIntern
}

function generateHTML(managersArray, engineersArray, internsArray) {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./styles.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    
    <body>
    
        <header class="container.fluid">
            <div class="row">
                <div class="col-12 h1 fw-bold text-center bg-danger text-white d-flex align-items-center justify-content-center"
                    style="height: 100px;">
                    Team Profile Builder
                </div>
            </div>
        </header>
    
        <div class="container">
    
            <div class="row">

            ${createManager(managersArray)} 
            ${createEngineer(engineersArray)} 
            ${createIntern(internsArray)}  
    
            </div>
    
        </div>
    
    
    </body>
    
    </html>`

}



module.exports = generateHTML;