const express = require("express");
const imageRouter = require('./routes/imageRouter.js');
const authRouter = require("./routes/authRouter.js");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;



          
cloudinary.config({ 
  cloud_name: 'dzbpnxiip', 
  api_key: '183353833586657', 
  api_secret: 'D0aBcvbNbRqzefWXCOaGDgR_FPs' 
});
const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.use('/api/v1/auth', authRouter);

app.use((req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        token = req.headers.authorization.split(' ')[1];
    }
    try{
        // console.log("jwt");
        jwt.verify(token, 'my-secret-123');
        // console.log("jwt");
        next();
    }
    catch(err){
        return res.status(401).json({
            status: 'fail',
            message: 'Login required',
        })
    }
})

app.use('/api/v1/images', imageRouter);

module.exports = app;
 