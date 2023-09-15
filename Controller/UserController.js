const UserSchema = require('../Schema/UserSchema');

//encrypt login
const login=(req,res)=>{
    const user_email=req.body.user_email
    const user_password=req.body.user_password

    if(user_email!=undefined && user_password!=undefined && user_email!="" && user_password!=""){
        UserSchema.find({user_email:user_email,user_password:user_password},(err,data)=>{
            if(err){
                res.status(500).json({
                    message:"err for faching user"
                })
            }
            else{
                if(data!=undefined && data!=null && data.length>0){
                    res.status(200).json({
                        message:"user found",
                        data
                    })
                }
                else{
                    res.status(404).json({
                        message:"user not found"
                    })
                }
            }
        })
    }
    else{
        res.status(404).json({
            message:"emaill and possowerd both are require"
        })
    }
}

const getalluser=(req,res)=>{
    UserSchema.find((err,data)=>{
        if(err){
            res.status(400).json({
                message:"err for faching user data"
            })
        }
        else{
            if(data==undefined || data==null || data.length==0){
                res.status(500).json({
                    message:"err for finding user data"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully finding user data",
                    data
                })
            }
        }
    })
}
const adduser=(req,res)=>{
    console.log("use..",req.body)

    const user=new UserSchema(req.body)

    user.save((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for save user data",
                err:err
            })
        }     
        else{
            res.status(200).json({
                message:"successfully save user data",
                data:data
            })
        }  
    })
}
const getuser=(req,res)=>{
    const id=req.params.id
    UserSchema.findById(id,((err,data)=>{
        if(err){
            res.status(500).json({
                message:"err for faching user data"
            })
        }
        else{
            if(data==null || data==undefined || data.length==0){
                res.status(400).json({
                    message:"err for finding user id"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully find user data",
                    data
                })
            }
        }
    }))
}
const updateuser=(req,res)=>{
    const id=req.params.id

    UserSchema.findByIdAndUpdate(id,req.body,((err,data)=>{
        if(err){
            res.status(404).json({
                message:"err for faching user"
            })
        }
        else{
            if(data==null || data==undefined || data.length==0){
                res.status(500).json({
                    message:"err for update user"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully update for user",
                    data
                })
            }
        }
    }))
}
const deletuser=(req,res)=>{
    const id=req.params.id

    UserSchema.findByIdAndDelete(id,(err,data)=>{
        if(err){
            res.status(500).json({
                message:"err faching user"
            })
        }
        else{
            if(data==null || data==undefined || data.length==0){
                res.status(500).json({
                    message:"err for deleate proccess"
                })
            }
            else{
                res.status(200).json({
                    message:"successfully deleate data",
                    data
                })
            }
        }
    })
}



// const Login = async (req, res, next) => {
//     try {
//         const { user_email, user_password } = req.body;
//         if (!user_email|| !user_password) {
//             throw new Error('Parameter are not correct');
//         }
//         let user = await UserServices.checkUser(user_email);
//         if (!user) {
//             throw new Error('User does not exist');
//         }
//         const isPasswordCorrect = await user.comparePassword(user_password);
//         if (isPasswordCorrect === false) {
//             throw new Error(`Username or Password does not match`);
//         }
//         // Creating Token
//         let tokenData;
//         tokenData = { _id: user._id, user_email: user.user_email };
    
//         const token = await UserServices.generateAccessToken(tokenData,"secret","1h")
//         res.status(200).json({ status: true, success: "sendData", token: token });
//     } catch (error) {
//         console.log(error, 'err---->');
//         next(error);
//     }
// }


const registerUser = async (req, res) => {
    const { user_name, user_email, user_password, user_mobile_Number, user_address } = req.body;
  
    try {
      // Check if the email is already registered
      const existingUser = await UserSchema.findOne({ user_email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
  
      // Create a new user
      const user = new UserSchema({ user_name, user_email, user_password, user_mobile_Number, user_address});
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully',});
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error });
    }
  };



  const forgotPassword = async (req, res) => {
    try {
      const { user_email, newPassword, confirmPassword } = req.body;
  
      // Check if user exists
      const user = await UserSchema.findOne({ user_email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Validate password fields
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ error: 'New password and confirm password do not match' });
      }
  
      // Update user's password
      user.user_password= newPassword;
      await user.save();
  
      // Send success response
      res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
      console.error('Forgot password error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  const searchuser = (req, res) => {
    const _id = req.body._id;

    UserSchema.find({ _id:_id }, (err, data) => {
        if (err) {
            res.status(500).json({
                message: "Error fetching user",
                error: err
            });
        } else {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: "user found",
                    user_data: data
                });
            } else {
                res.status(404).json({
                    message: "user not found"
                });
            }
        }
    });
};


module.exports={
    getalluser,
    adduser,
    getuser,
    updateuser,
    deletuser,
    login,
    registerUser,
    // Login,
    forgotPassword,
    searchuser
}
