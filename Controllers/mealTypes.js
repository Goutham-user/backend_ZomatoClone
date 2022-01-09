const mealTypesModel = require('../Models/mealTypes');

exports.getMealTypes= (req, res) =>{
    mealTypesModel.find().then(_res => {
        res.status(200).json({
            message: "Meal Types data fetched sucessfully!!",
            mealTYpes: _res
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
    
}