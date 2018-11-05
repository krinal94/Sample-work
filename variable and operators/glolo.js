var var1= document.getElementById('var1').value;
var var2= document.getElementById('var2').value;
var func= myfunc(var1, var2);

function myfunc(a,b)
{
    return a + b;
    
}
document.getElementById("b1").innerHTML = func;