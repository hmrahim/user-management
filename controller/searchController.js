const User = require("../model/User")
exports.getSearch = async(req,res)=> {
     const term = req.query.term

     const result = await User.find({
        $text:{
            $search:term
        }
     })

     res.json(result)
    

}