const {readFile} = require('fs');
const File =require ('./FilePaths').File;
const encodingcode= require('./FilePaths').encodingcode;
const Filecontent=[];

console.time();
for (let i = 0; i < File.length; i++) {
    readFile(File[i], encodingcode, (error, data) => {
        Filecontent.push(data);
        console.log(error);
        console.log(data);
        if(Filecontent.length === File.length){
            console.log('async done');
            console.timeEnd();
        }
    });   
}




