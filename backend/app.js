const express=require('express')
const cors=require("cors")
const router = require('./routes/routes');
const app=express().use(express.json()).use(cors()).use(router);
app.listen(3000)



// property.firstPage((err,res)=>{
   
//     console.log(res[0].fields);
// })
// application.create({
//     property_id: '2345',
//     property_name: 'tbc',
//     property_description: 'zdsadad',
//     property_size: 8524
//   },(err,res)=>{
//       console.log(err,res);
//   })
//   create update,replace destroy