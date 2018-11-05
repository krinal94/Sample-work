var var1= Number(prompt("enter var1"));
var var2= Number(prompt("enter var2"));

function sum()
{
    var sum = var1 + var2;
    console.log(sum);
	document.getElementById("sum").innerHTML = sum;
}


function mul()
{
    var mul= var1 * var2;
    console.log(mul);
    document.getElementById("mul").innerHTML = mul;
    return mul;
    
}

function mod()
{
    var mod= var1 % var2;
    console.log(mod);
    document.getElementById("mod").innerHTML = mod;
    return mod;
}
