function compute()
{
    /*Year Variable*/
    var years = document.getElementById('years').value

    /*Calculation for current year Variable*/
    var year = new Date().getFullYear() + parseInt(years) 

    /*Rate Variable*/
    var rate = document.getElementById("rate").value;

    /*principal Variable*/
    var principal = document.getElementById("principal").value;

    /*Stops blank inputs and impossible calculations*/
    if (principal > 0){

    /*Interest variable*/
    var interest = principal * years * rate / 100;

    /*Response message when given all required inputs*/
    document.getElementById("result").innerHTML='If you deposit $<span>'+principal+ '</span> \
    at an interest rate of</br> <span>'+rate+' %</span> \
    You will receive an interest amount of <span> $'+ interest + ',</span>\
    in the year <spans>'+year+'</span>';

    } else
    {
    
    alert ("Enter a positive number please");


    }
    document.getElementById("principal").focus();

}
/*Live Update Rate while changing slider*/
function updateRate() 
{

    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText=rateval+ ' %';

}
