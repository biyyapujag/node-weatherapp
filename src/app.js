const express = require('express');
const path = require('path');
const hbs = require('hbs');
const forecast = require("../utils/forecast");
const geocode = require("../utils/geocode");
const app = express();
const port = process.env.PORT||3000;

console.log(__dirname);
console.log(path.join(__dirname,".."))
const publicdirectory = path.join(path.join(__dirname,"../public"))
const viewPath = path.join(path.join(__dirname,"../templates/views"));
const partialsPath = path.join(path.join(__dirname,"../templates/partials"));
// console.log(__filename)
app.set('view engine','hbs'); //TO se the HBS to express
app.set("views",viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicdirectory));
app.get('',(req,res)=>{
res.render('index',{title:"Hello",name:"Jagadeesh"});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:"Hello",about:"i am jagadeesh"});
    })

app.get('/help',(req,res)=>{
    res.render('help',{title:"Hello",help:"i am jagadeesh"});
})

app.get('/products',(req,res)=>{    
    if(!req.query.search){
           return res.send({error:"Provide search term"});
    }
        res.send({products:[]});    
})

app.get('/aboutus',(req,res)=>{
    res.send('<h1>About</h1>');
    })

    app.get('/wheather',(req,res)=>{
        if(!req.query.addess){
            return res.send({error:"Provide address term"});
     }         
     geocode(req.query.addess,(error,{latitude,longitude,location}={})=>{
        if(error){
           console.log(error);
           res.send({"error":error});
           return  console.log(error);
        }
        forecast(longitude,latitude,(error,data)=>{
            if(error){
                res.send({"error":error});
             return console.log('Error',error);
              
          }
              console.log(location);
              console.log('Data',data.daily.data[0].summary + data.currently.temperature + ' probability' + data.currently.precipProbability);
          res.send({summary:data.currently.temperature});
          })
     });
     


        });

        app.get('/help/*',(req,res)=>{
            res.render("404",{notfound:"Help other page"});
        })
        
    app.get('*',(req,res)=>{
        res.render("404",{notfound:"other page"});
    })
    
app.listen(port,()=>{
    console.log('server is up on port ${port}')
})