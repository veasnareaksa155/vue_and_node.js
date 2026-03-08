//======Syntax for create file by using writeFile(path,data,callback) method of fs module========

const fs = require('fs/promises');

async function createFile() {
    try {
        await fs.writeFile('test.txt', 'This is a test file created by using writeFile method of fs module.', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File has been created.");
            }
        });
    } catch (err) {
        console.log(err);
    }
}

createFile();

// test to add more data to test.txt file 

// const data = {
//     name: "Veasna Reaksa",
//     age: 20 ,
//     gender:'Male',
//     address:"Battambang, Cambodia",
// }



// async function addData(data){
//     try{
//         await fs.appendFile('test.txt',`Name: ${data.name}\nAge: ${data.age}\nGender: ${data.gender}\nAddress: ${data.address}\n`, (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log("Data has been added to file");
//             }
//         });
//     }catch(err){
//         console.log(err);
//     }
// }
// async function DeleteFile(data) {
//     try {
//         await fs.unlink(data, (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log("File has been deleted");
//             }
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

// addData(data);
// DeleteFile('test.txt');