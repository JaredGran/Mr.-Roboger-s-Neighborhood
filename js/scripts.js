$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault()
  
    const array = [0,1,2,3,4,5];
    array.forEach(function(number) { 
      console.log(number * 2);
    });
     function beepBoop(){
     userImput = $("#userImput".val())
      for (let i = 0; i <= userImput; i ++); 
    } 
  beepBoop;
  })
});
$("#text-passage").val();