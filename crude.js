const express = require('express');
const app = express();

let users = [
    {id:1,username:"John Doe", email:"john.doe@example.com", password:"password123"},
    {id:2,username:"Jane Smith", email:"jane.smith@example.com", password:"password456"}
];
app.use(express.json());

//========read user api========
app.get('/users',(req ,res) =>{
    res.json(users);
})


//=======create user api========
app.post('/users/create', (req , res) =>{
    const {username , email , password}= req.body;

    const user = {
        id:users.length + 1,
        username,
        email,
        password
    };
    users.push(user);
    res.json({
        success:true,
        message:"User registered successfully",
        user
    });
});

//========update user api=========

app.put('/users/update/:id', (req , res) =>{
    const userId = parseInt(req.params.id);
    const {username, email,password}= req.body;

    const user = users.find(u=>u.id === userId);
    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }else{
        user.username = username || user.username;
        user.email = email || user.email;
        user.password = password || user.password;
        res.json({
            success:true,
            message:"User updated successfully",
            user
        });
    }
})

app.delete('/users/delete/:id' , (req , res)=>{
    const userId = parseInt(req.params.id);

    const userIndex = users.findIndex(u=>u.id === userId);
    if(userIndex === -1){
        return res.status(404).json({
            message:"User not found"
        });
    }else{
        users.splice(userIndex,1);
        res.json({
            success:true,
            message:"User deleted successfully"
        });
    }
});

//========Product API========
let products = [
     {
        id:1,
        name:"coffee",
        price:10.99,
        description:"A hot beverage made from roasted coffee beans."
     },
     {
        id:2,
        name:"tea",
        price:5.99,
        description:"A hot beverage made from cured tea leaves."
     }
];
//========read product api========
app.get('/products',(req , res) =>{
    res.json(products)
})
//========create product api========

app.post('/products/create', (req , res)=>{
    const {name, price ,description} = req.body;
    const productNew = {
        id: products.length + 1,
        name,
        price,
        description
    };
    products.push(productNew);
    res.json({
        message:"Product Created successfully",
        productNew
    })
})





app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});