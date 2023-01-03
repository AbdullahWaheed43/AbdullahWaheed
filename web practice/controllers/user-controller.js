const user=require('../models/user')

 const getallusers = async(req,res) => {
    let users;
    try{
        users= await user.find();
    }
    catch(error){
        console.log(error);

    }

    if(!users){
        return res.status(404).json({message: "no user occur "});
    }
    return   res.status(200).send(users);
}




module.exports=getallusers;