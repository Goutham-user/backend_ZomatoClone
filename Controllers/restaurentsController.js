const restaurentsModel = require('../Models/restaurents');


exports.getrestaurentsByCity= (req, res) =>{
    const { locId } = req.params;
    restaurentsModel.find({ location_id : locId }).then(_res => {
        // console.log(_res)
        res.status(200).json({
            message: "restaurents by city name data fetched sucessfully!!",
            restaurents: _res
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
    
}

exports.getrestaurentsData = (req, res) =>{
    restaurentsModel.find().then(_res => {
        res.status(200).json({
            message: "restaurents data fetched sucessfully!!",
            restaurents: _res
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
    
}


exports.filterRestaurents = (req, res) => {
    // required body params mealType,sort,page,itemsPerPage


    let { mealType, location, cuisine, lcost, hcost, page, sort, itemsPerPage } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;
    itemsPerPage = itemsPerPage ? itemsPerPage : 2;


    let startIndex= (page * itemsPerPage) - itemsPerPage;
    let endIndex=  page  * itemsPerPage;
    const filterObj ={}

    location && (filterObj["location_id"] = location);
    mealType && (filterObj["mealtype_id"] = mealType);
    cuisine && (filterObj["cuisine_id"] = cuisine);
    lcost && hcost && (filterObj["min_price"] = { $gte: lcost, $lte: hcost });

    restaurentsModel.find(filterObj).sort({ min_price: sort }).then(responce => {
        // pagination logic
        const filteredByPagination = responce.slice(startIndex, endIndex);
        res.status(200).json({
            message: "Restaurents data fetched sucessfully!!",
            restaurentsData: filteredByPagination
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })

}



exports.getRestaurentDetailByID = (req, res) =>{
    const { restId } = req.params;
    restaurentsModel.findById(restId).then(_res =>{
        res.status(200).json({
            message: "Reastaurt details fetched by restaurent ID",
            RestaurentDetails: _res
        })
    }).catch(err => {
        res.status(500).json({
            error : err
        })
    })
}