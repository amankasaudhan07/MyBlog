const User = require("../models/User");

exports.addBlog = async (req,res)=>{
    try{
       
        const {name,author,category, date , content ,tag} =req.body;
        if (!name || !author || !category || !date || !content||!tag) {
            console.log("not all fields...");
            return res.status(400).json({
              status: 400,
              message: "Please fill all fields",
            });
        }
        
        const data = await User.create({
            name,
            author,
            category,
            date,
            content,
            tag
        }) ;
        return res.status(200).json({
            status: 201,
            message: "User created successfully",
            data: User,
          });

    } catch (error){
        console.log("error", error);
      return res.status(500).json({
      status: 500,
      message: error.message,
    });
    }
}