$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

   var age= prompt("this is age restricted content please confirme your age to continue")
    if(age>105){
     alert("bitch you lying")}
  
 var feelings= prompt("how are you feeling- ans in true and false , true being positive feeings and false being negative")
                      if(feelings==="false"){
   alert("dont worry everything is going to be fine soon and if you need someone to vent to hmu, do enjoy my test page")
 }else{ if(feelings==="true"){
   alert("thats good you have a duty towards urself to feel good everyday of your life, do enjoy my test page")
 }else {
   alert("please ans in true and false")
   
 }
 }
