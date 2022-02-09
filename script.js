
function compute()
{    
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
if(principal==" " || principal<=0)
 {
     alert("please enter a Positive value");
     principal.focus();
     return false;
 }
 if(rate==0)
 {
     alert("please select a valid rate")
     return false;
 }
 document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b> <mark>"+interest+"</mark> </b>,\<br\>in the year <b>"+years+"</b>\<br\>"
 }

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
 



