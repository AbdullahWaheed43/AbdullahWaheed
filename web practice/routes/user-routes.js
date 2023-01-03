const express = require(`express`);
const getallusers=require('../controllers/user-controller');

const router = express.Router();

// router.get("/", getallusers);

router.get('/s',(req,res)=>{
    res.send('Hello World')
})
module.exports=router;