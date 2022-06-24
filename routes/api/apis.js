const express= require('express');

const Item = require('../../models/item');
const router= express.Router();

router.post('/api/createItem',async (req,res)=>{
	req.header('Content-Type:application/json');
	//console.log(req.body);
	
	try{
	req.header('Content-Type:application/json');
	//const { itemname, itemprice, itemavatar, itemreviews} = req.body;
	const newItem= new Item({
		itemname: req.body.itemname,
		itemprice: req.body.itemprice,
		itemavatar: req.body.itemavatar,
		itemreviews: req.body.itemreviews
	});
	await newItem.save();
	//console.log(item);
	res.json(newItem);
	//res.status(200).send();
	}
	catch(err){
	console.log(err);
    res.status(500).send('Server Error');
	}
	
});
router.get('/all',async (req,res)=>{
	try{
		const item= Item.find().sort();
		//res.status(200).send();
		res.json(item);
	}
	catch(err)
	{
		console.log(err);
	}
});

router.get('/item/:id',async(req,res)=>{
	console.log(req.params.item_id);
	try{
		const item=await Item.findOne(req.params.id);
		res.status(200).send(item);
	}catch(err){
		console.log(err);
	}
});
router.put('/updateItem/:itemname',async(req,res)=>{
	console.log(req.params);
	try{
		const newItem= new Item({
		itemname: req.body.itemname,
		itemprice: req.body.itemprice,
		itemavatar: req.body.itemavatar,
		itemreviews: req.body.itemreviews
	});
		const item=await Item.findOneAndUpdate({itemname:req.params.itemname},
			{$set:newItem},
			{new:true});
		return res.json(item);
	}
	catch(err){
		console.error(err.message);
	}
});
module.exports=router;