const express = require('express');

const locationsController = require('../Controllers/locationController')
const mealTypesController = require('../Controllers/mealTypes')
const widgitController = require('../Controllers/widgitController')
const restaurentsController = require('../Controllers/restaurentsController')
const userSignUpController = require('../Controllers/usersController')
const menuItemsController = require('../Controllers/menuItemsController')
const paymentController = require('../Controllers/payment');
const route = express.Router();

route.get('/locations', locationsController.getLocations);
route.get('/mealtypes', mealTypesController.getMealTypes);
route.get('/widgit', widgitController.getWidgit)
route.get('/restaurents/', restaurentsController.getrestaurentsData)
route.get('/restaurents/:locId', restaurentsController.getrestaurentsByCity)
route.post('/signup', userSignUpController.userSignup)
route.post('/login', userSignUpController.userlogin)
route.post('/filter', restaurentsController.filterRestaurents)
route.get('/restaurent/:restId', restaurentsController.getRestaurentDetailByID)
route.get('/menuitems/:restId', menuItemsController.getItemsByRestId)

// Paytm Gateway 

route.post('/payment', paymentController.payment);
route.post('/callback', paymentController.callback);
module.exports = route;