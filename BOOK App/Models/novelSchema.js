const mongoose=require('mongoose');

const blogsSchema=mongoose.Schema({
    author:String,
    description:String,
    title:String,
    cover:String,
    user:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },

    
})

const blogsModel=mongoose.model('blogs',blogsSchema);

module.exports=blogsModel;