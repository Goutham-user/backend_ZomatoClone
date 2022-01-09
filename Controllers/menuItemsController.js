const menuItemsModel = require('../Models/menuItems');

exports.getItemsByRestId = (req,res) =>{
    const { restId } = req.params;
    menuItemsModel.find({ restaurantId : restId }).then(_res =>{
        res.status(200).json({
            message: "items data fected sucessfuly!",
            restaurentitems : _res
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
}