var age = parseInt(prompt("Enter your age"));

if(age <= 14)
{
    alert("Not Allowed");
}
else if(age==50)
{
    alert("special discount");
}
else if(age >14 || age < 65)
{
    alert("regular Price");
}
