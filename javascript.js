var wdi_17_names = ["Addison", "Ben", "Christine", "Chloe", "Cris", "Dane", "David H", "David Z", "Emily", "Imtaek", "Jack", "Jesse P", "Jesse Z", "Jonathan", "Pericles", "Peter", "Philippe", "Sergio", "Simon", "Tali", "Tavo", "Trevor"];

var i = 0;
 function eachName(){

   for (i = 0; i < wdi_17_names.length; i++) {
       console.log(wdi_17_names[i]);
   }
   // the loop logs each string in the array
   //notice the difference in what is logged
 }
 eachName();



 //REFACTORED
 var namePicker = wdi_17_names[Math.floor(Math.random() * wdi_17_names.length)];
 console.log(namePicker);
