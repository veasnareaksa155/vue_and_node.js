const express = require('express');
const app = express();



app.use(express.json());
//=========Read User api==============
app.get('/users' , (req , res) =>{
    res.json(users);
})
let users = [];
//=========Create User api============
app.post('/users/register',(req , res) =>{
    const {username , email , password , gender} = req.body;
    const user = {
        id:users.length + 1,
        username,
        email,
        password,
        gender
    }
    users.push(user);
    res.json({
        message:"Registered Successfully"
    });
});

//=========Update User api===========
app.put('/users/update/:id' , (req , res) =>{
    const userId = parseInt(req.params.id);
    const {username, email, password , gender} = req.body;
    const user = users.find(u=>u.id === userId);
    if(!user){
        res.status(404).json({
            message:"User Not found"
        })
    }else{
        user.username = username || user.username,
        user.email = email || user.email,
        user.password = password || user.password,
        user.gender = gender || user.gender
        res.json({
            message:"Update successfully",
            user
        })
    }
});

//delete user api
app.delete('/users/delete/:id' , (req , res) =>{
    const userId = parseInt(req.params.id);
    const user = users.find(u=>u.id === userId);
    if(!user){
        res.status(404).json({
            message:"User not found"
        })
    }else{
        users.splice(user,1);
        res.status(200).json({
            message:"User deleted successfully",
        })
    }
})

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000");
});