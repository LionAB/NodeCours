console.time();
const {readFileSync} = require('fs');
const File = require('./FilePaths').File;
const encodingcode = require('./FilePaths').encodingcode;

 
try {
    const data1=readFileSync(File[0],encodingcode);
    const data2=readFileSync(File[1],encodingcode);
    console.log(data1);
    console.log(data2);
  } catch (error) {
    console.error(error);
  }
console.log('sync done');
console.timeEnd();
 
   