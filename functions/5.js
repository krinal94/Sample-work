var age= Number(prompt("Please enter your age"));

if(age <= 2)
{
    alert("No charge");
}

else if((age >2) && (age <= 14))
{
   alert("10% discount");
}

else if((age>14) && (age<=55))
{
    alert("Regular Price");
}

else if(age > 55)
{
    alert("20% discount");
}


