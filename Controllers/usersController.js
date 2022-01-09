const usersController = require('../Models/users');

exports.userSignup = (req,res) =>{
    const { firstName,
        lasstName,
        userName,
        email,
        password,
        role,
        contactNumber,
        profilePicture } = req.body;

    const userObj = new usersController({
        firstName,
        lasstName,
        userName,
        email,
        password,
        role,
        contactNumber,
        profilePicture 
    });

    userObj.save().then(response =>{
        res.status(200).json({
            message: 'user registered suessfully!!',
            userData: response
        })
    }).catch(err =>{
        res.status(500).json({
            error : err
        })
    })
}


exports.userlogin = (req, res) => {
    const { email, password } = req.body;

    usersController.find({email, password}).then(_res =>{
        console.log(_res.length)
        if(_res.length > 0){
            res.status(200).json({message: "Registered user", isAuthenticated: true, userDetails : _res})
        }
        else{
            res.status(200).json({message: "Not a Registered user", isAuthenticated: false, userDetails : _res})
        }
    }).catch(err =>{ 
        res.status(500).json({ error: err})
     })
}