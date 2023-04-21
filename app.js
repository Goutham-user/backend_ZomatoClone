const express = require('express');
const mongose = require('mongoose');
const cors = require('cors')

const router= require('./Routes/index')


const port = process.env.PORT || 2000;
const hostName = 'localhost';
const dbUserName = 'user1';
const dbPassword = 'GhBeqkOyelWQ6hbK';
const dbName= 'zomato_clone_DB';


const localDBUrl = "mongodb://localhost:27017/zomato_clonev2"
const atlasDBURL = `mongodb+srv://${dbUserName}:${dbPassword}@cluster0.kdjlb.mongodb.net/${dbName}?retryWrites=true&w=majority`


const app =express();

// middlewres
app.use(cors());
app.use(express.json());
app.use('/', router);

mongose.connect(atlasDBURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(res =>{
    app.listen(port, ()=>{
        console.log(`Server is active and running on ${port}`);    
    })
}

).catch(
    err => console.log('error is ' +err)
)

