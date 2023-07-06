const express=require("express")
const { bookModel } = require("../Model/book.model")


const BookRouter=express.Router()

BookRouter.get("/get",async(req,res)=>{
    try {
        const BookData= await bookModel.find()
        return res.status(200).send(BookData)
    } catch (error) {
        return res.status(401).send({msg:error.message})
    }
})



BookRouter.post("/add",async(req,res)=>{
    try {
        const newBook=new bookModel(req.body)
        await newBook.save()
        return res.status(200).send({msg:"NEW Book Added", newBook})
    } catch (error) {
        return res.status(401).send({msg:error.message})
    }
})


BookRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const DeleteBook=await bookModel.findByIdAndDelete({_id:id})
        // await newBook.save()
        return res.status(200).send({msg:" Book Deleted", DeleteBook})
    } catch (error) {
        return res.status(401).send({msg:error.message})
    }
})
BookRouter.get("/filter",async(req,res)=>{
    const {genre}=req.query
    try {
        const FilterBookData= await bookModel.find({genre})
        return res.status(200).send(FilterBookData)
    } catch (error) {
        return res.status(401).send({msg:error.message})
    }
})


BookRouter.get("/sort",async(req,res)=>{
   
    try {
        const SortBookData= await bookModel.find().sort({price:1})
        return res.status(200).send(SortBookData)
    } catch (error) {
        return res.status(401).send({msg:error.message})
    }
})

BookRouter.get("/sort1",async(req,res)=>{
   
    try {
        const SortBookData= await bookModel.find().sort({price:-1})
        return res.status(200).send(SortBookData)
    } catch (error) {
        return res.status(401).send({msg:error.message})
    }
})

module.exports={BookRouter}