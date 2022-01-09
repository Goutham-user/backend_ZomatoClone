const locationsModel = require('../Models/Locations');

exports.getLocations = (req, res) => {
    locationsModel.find().then(_res =>
        res.status(200).json({
            message: "Locations data feteched sucessfully!!",
            locations: _res 
        })
    ).catch(err => {
        res.status(500).json({error: err})
    })
}


