const user = require('../models/user')

// Frontend page github page link
const frontendURL = 'https://gperez314.github.io/Assignment2-Registration-Frontend/'

// Get and process user registration data from frontend
const registerUser = (req, res) => {  
    // Get data from frontend and store user in user model
    console.log(req.body);
    user.id = req.body.idNo;
    user.name = req.body.name;
    user.address = req.body.address;
    user.status = req.body.status;

    // Determine fee based on user status
    if (user.status == 'student') {
        user.fee = 10;
    } else if (user.status == 'staff') {
        user.fee = 50;
    } else {
        user.fee = 0;
    }

    // Redirect to confirmation page
    console.log(user);
    let url = frontendURL + '/user.html'
    console.log(url)
    res.redirect(url);
}

// Send user confirmation data to frontend
const confirmUser = (req, res)=> {
    res.json(user);
}

module.exports = {
    registerUser, confirmUser
}