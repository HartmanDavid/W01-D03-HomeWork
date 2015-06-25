var wdi_17_names = ["Addison", "Ben", "Christine", "Chloe", "Cris", "Dane", "David H", "David Z", "Emily", "Imtaek", "Jack", "Jesse P", "Jesse Z", "Jonathan", "Pericles", "Peter", "Philippe", "Sergio", "Simon", "Tali", "Tavo", "Trevor"];
var used_names_array = [];
var i = 0; //used to count the for loop
var counter = 0; //used to rest the count of the eachName function
    function eachName(){

      for (i = 0; i < wdi_17_names.length; i++) {
            var pick = Math.floor(Math.random() * wdi_17_names.length);
            if ((used_names_array.indexOf(pick)) === -1){
                used_names_array.push(pick);
                var namePicker = wdi_17_names[pick];
                console.log(namePicker);
            }else if(used_names_array.length < wdi_17_names.length){
                eachName();
            }
      // the loop logs each string in the array
      //notice the difference in what is logged
        }
    }
 eachName();
