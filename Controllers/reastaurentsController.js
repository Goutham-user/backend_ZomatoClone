const reastaurentsData = require('../Models/reastaurentsData.json');

exports.getByReasutaurents =(req, res) =>{
    res.status(200).json({
        meassage:"Reastaurents data fetched Sucessfully!",
        Reastaurensts : reastaurentsData
    })
}


exports.sortReastaurentsByCityName = (req,res) =>{
    var sorteddata =reastaurentsData.filter(item => item.city_name == req.param("city_name"));
    res.status(200).json({
        message: "Reastaurents data sorted by city name sucessfully!",
        reastaurtsByCityName : sorteddata
    })
}