const express= require('express');
const router= express.Router();
const itemModel = require('../../models/item');
router.post('/createItem',async(req,res)=>{
	console.log("Entered Api");
	try{
	req.header('Content-Type:application/json');
	const newItem= new Item({
		itemname: req.body.itemname,
		itemprice: req.body.itemprice,
		itemavatar: req.body.itemavatar,
		itemreviews: req.body.itemreviews
	});
	const item= newItem.save();
	res.json(item);
	res.status(200).send();
	}
	catch(err){
		console.log(err);
	}
});
router.get('/all',async(req,res)=>{
	try{
		req.status(200).send(router.find());
	}
	catch(err)
	{
		console.log(err);
	}
});
router.get('/item:id',async(req,res)=>{
	try{
		const item=await findById(req.params.itemId);
		res.status(200).send(item);
	}catch(err){
		console.log(err);
	}
});
router.put('/updateItem/:id',async(req,res)=>{
	try{
		const item=findOneandUpdate(req.itemId)
	}
	catch(err){

	}
});
module.exports=router;