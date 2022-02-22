setTimeout(()=>{
  const x =2;
  const y =2;
  const sum = x+y ;
  console.log(sum);  

}, 1000);

const luxon = require('luxon');



const {readFileSync} = require('fs');
 
setTimeout(()=>{
  try {
    const now = luxon.DateTime.now();
    const tenYearFromNow = now.plus({ years: 10 }).startOf('month');
    console.log(now.toFormat('dd/MM/yyyy HH:mm:ss'));
    console.log(tenYearFromNow.toFormat('dd/MM/yyyy HH:mm:ss'))
    const data =readFileSync('./static/file-1.txt','utf8');
    console.log('requete block'+data);
  } catch (error) {
    console.error(error);
  }
console.log('async ça continue');
 },1000)

 readFileSync('./static/file-1.txt','utf8',(error,data)=>{
   console.error(error);
   console.log(data);
 });
 console.log('sync keep going');








