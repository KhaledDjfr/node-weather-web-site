const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utiles/forecast')
const geocode = require('./utiles/geocode')








console.log(__dirname)
console.log(path.join(__dirname, '../public'))


const app = express()

const publicPath =path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')




app.use(express.static(publicPath))

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)


app.get('',(req,res)=> {
    res.render('index', {
        title:"weather app",
        name: "Khaled.D",

    }) 
})
app.get('/about',(req,res)=> {
    res.render('index', {
        title:"About ",
        name: "Khaled.D",

    }) 
})
app.get('/help',(req,res)=> {
    res.render('help', {
        title:"Help",
        name: "Khaled.D",
        msg:'tell us your Problme so we can help you '
    }) 
})
app.get('/weather', (req,res) => {
  
    if(!req.query.address) {
      return res.send({
      error:'PLease provide an address !! '
  })
    } 
  
    geocode(req.query.address, (error,data)=> {
        if(error) {
            return res.send(error)
        }
    
        forecast(data.laltitude,data.longtitude , (error, forecastData) => {
           if( error) {
               return res.send({error})
           }
           
            res.send({
            forecast:forecastData,
            name: "Khaled.D",
            address : req.query.address,
            location: data.location,
            
   
           })
    
    })
    
   
})
})  
app.get('/products',(req,res)=> {
    
    if(!req.query.search) {

     return   res.send({
            error: 'you must provide a search term '
            
        })
    }
    
    
    console.log(req.query.search)
    res.send ({
        products: [],
    })
})

app.get('/help/*',(req,res)=>{
res.render('error',{
    p404:"'help articel not found'",
    title: '404 page ',
    name:'khaled.D'
})


})


app.get('*',(req,res)=> {
    res.render('error',{
        p404:"page not Found'",
        title: '404 page ',
        name:'khaled.D'
    })
})


app.listen(3000, () => {
console.log('server is up on port 3000.')

})


