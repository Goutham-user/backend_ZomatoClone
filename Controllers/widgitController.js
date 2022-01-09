const widgitModel = require('../Models/widgit');

exports.getWidgit= (req, res) =>{
    widgitModel.find().then(_res => {
        console.log(_res)
        
        res.status(200).json({
            message: "Wigit data fetched sucessfully!!",
            widgit: _res
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
    
}