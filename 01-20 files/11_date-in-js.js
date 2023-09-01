// DATES

const myDate = new Date()
console.log(myDate); //2023-08-18T01:03:37.658Z
console.log(myDate.toDateString()); //Fri Aug 18 2023
console.log(myDate.toISOString()); //2023-08-18T01:05:13.684Z
console.log(myDate.toLocaleString()); //8/18/2023, 6:36:35 AM
console.log(myDate.toString());//Fri Aug 18 2023 06:37:09 GMT+0530(India Standard Time)
console.log(myDate.toTimeString());//06:38:05 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());//Fri, 18 Aug 2023 01:08:35 GMT
console.log(myDate.toJSON());//2023-08-18T01:09:41.531Z
console.log(myDate.toLocaleTimeString());//6:41:02 AM