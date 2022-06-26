const express = require("express");
const UserService = require("../Services/UserService");
const mongoose = require("mongoose");
const Sleep = require("../models/Sleep");
const Sleepx = mongoose.model("Sleep", Sleep);
const router = express.Router();
const {v4 : uuidv4} = require('uuid')
const auth = require("./auth")






router.get('/:id',async (req,res)=>{

const id = req.params.id;

const result = await Sleepx.find({id});

if(result!=null){

    return res.json(result);
}
else return res.send("User doesn't exist!");


});


router.post('/start/:id',async(req,res)=>{

    const newId = uuidv4()
    
const nsleep = new Sleepx({
    Sid:newId,
    Uid:req.params.id,
    Stime:req.body.Stime,
    Wtime:req.body.Wtime,
    Date:req.body.Date
})

const osleep = await nsleep.save();
if(osleep!=null)
return res.json(osleep);

return res.send('Error!');

})





router.post("/end/:id",async (req,res)=>{
Uid = req.params.id;
const Sid = req.body.Sid;
    const check = await Sleepx.find({Sid});

    if(!check){
        res.send("Not a valid Session!")
    }
    else{

      Sleepx.updateOne({ "Sid":req.body.Sid }, { $set: req.body.Wtime});
     }
     const result = await Sleepx.find({Sid});
     res.send(result);
     

})


router.post("/del/:sid",async(req,res)=>{

    Sleepx.deleteOne({ Sid: req.params.sid  }).then(function(){
        res.send("Data Deleted!");
    }).catch(function(error){
        console.log(error);
    });

})



module.exports = router;