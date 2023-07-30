const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('../mongodb');
const { Authentication } = require('../middlewares/authentication');
const { Authorization } = require('../middlewares/authorization');
const userRouter = express.Router();




userRouter.get('/', async (req, res)=>{
    let data = await dbConnect();
    data=await data.find().toArray();
    res.send(data);

});
userRouter.post('/',Authentication ,Authorization ,async (req, res)=>{
    let data =  await dbConnect();
    let result =  await data.insertOne(req.body)
    res.send(result)

});
userRouter.put('/:name',async(req, res)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    res.send({result:"update"})

});
userRouter.delete('/:id',async(req, res)=>{
    const data= await dbConnect();
    const result = await data.deleteOne({_id:new mongodb.ObjectId (req.params.id)})
    res.send(result);

});
module.exports = {
    userRouter,
  };