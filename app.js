const express = require('express');
const path = require('path');
const newsRouter = require('./src/routes/news');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use('/css', express.static(path.join(__dirname, "public/css")))
app.use('/Images', express.static(path.join(__dirname, "public/Images")))
app.use('/js', express.static(path.join(__dirname, "public/js")))

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

//Routes
app.use('/', newsRouter.router)

// app.get("/myList/:item1/:item2/:item3", (req, res) => {

//     let item1 = req.params.item1;
    
//     let item2 = req.params.item2;
    
//     let item3 = req.params.item3;
    
//     console.log(item1, item2, item3);
    
//     });

// app.get("/myList", (req, res) => {

//     let item1 = req.query.computer;
    
//     let item2 = req.query.phone;
    
//     let item3 = req.query.watch;
    
//     console.log(item1, item2, item3);
    
//     });

app.listen(port, ()=>{
    console.log('Server is listening on '+port);
})
