
const fs = require('fs');


function readFile(fileName){

 
    return new Promise((resolve,rejects) => {


        fs.readFile(fileName, 'utf8', (err, data) => {
    
            if (err) {
                rejects(err);
            }
            resolve(data);
    
        });

     
    });

}





function writeFile(fileName,message){

 
    return new Promise((resolve,rejects) => {


        fs.writeFile(fileName, message, (err) => {
    
            if (err) {
                rejects(err);
            }
            resolve("data write successfully");
    
        });

     
    });

}



module.exports = {readFile,writeFile};