const express = require('express');
const app = express();
app.use(express.json());

//==========computer scientist api===========
let computerScientists = [
    {
        id:1,
        name:"Computer Scientist ",
        field:"Computer Science",
        description:"A computer scientist is a person who has expertise in the field of computer science, which encompasses the study of algorithms, data structures, programming languages, software development, and the theoretical foundations of computing. Computer scientists work on developing new technologies, improving existing systems, and solving complex problems related to computing. They may specialize in areas such as artificial intelligence, machine learning, cybersecurity, human-computer interaction, or software engineering."
    }
];
//============Business Administration============
let businessAdministrators = [
    {
        id:1,
        name:"Business Administration",
        field:"Business",
        description:"Business administration is the process of managing and overseeing the operations of a business or organization. It involves planning, organizing, directing, and controlling various aspects of the business, such as finance, marketing, human resources, and operations. Business administrators are responsible for making strategic decisions, setting goals, and ensuring that the organization runs efficiently and effectively. They may work in various industries and can hold positions such as managers, executives, or entrepreneurs."
    }
];
//==========Digital Marketing==========
let DigitalMarketing = [
    {
        id:1,
        name:"Digital Marketing",
        field:"Marketing",
        description:"Explore modern marketing strategies, social media, SEO, and data analytics. Create impactful digital campaigns."
    }
];

//============Data Science=============

let DataScience = [
    {
        id:1,
        name:"Data Science",
        field:"Data",
        description:"Analyze complex data sets, build predictive models, and extract meaningful insights using cutting-edge tools and techniques."
    }
]

//===============Our Faculty======================
//image 1
let imageOne = [
    {
        id:1,
        imageURl:"https://picsum.photos/300/200",
        description:"Example image"
    }
];





//=========Read Business Administration api===========
app.get('/computer-scientists' , (req , res)=>{
    res.json(computerScientists);
})
app.get('/business-administrators' , (req , res)=>{
    res.json(businessAdministrators);
})
app.get('/Data-scientists', (req , res)=>{
    res.json(DataScience);
});
app.get('/digital-marketing', (req , res)=>{
    res.json(DigitalMarketing);
});
app.get('/our-faculty', (req , res)=>{
    res.json(imageOne);
})




app.listen(3000 , () =>{
    console.log("Server is running on port 3000");
})