const mealtypeData = require('../Models/mealTypes.json');

exports.getByMealType = (req,res) =>{
    res.status(200).json({
        message: "Mealtype data fetched sucessfully!",
        mealTypes : mealtypeData
    })
}
