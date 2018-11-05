var a, b;
function sum()
{
    a= parseInt(document.getElementById("var1").value)+1;
    b= parseInt(document.getElementById("var2").value);
    var sum = a + b;
    console.log(sum);
    document.getElementById("sum").innerHTML = sum;
    return sum;
}


function mul()
{
    var mul= a * b;
    console.log(mul);
    document.getElementById("mul").innerHTML = mul;
    return mul;
}

function sub()
{
    a= parseInt(document.getElementById("var1").value)-1;
    b= parseInt(document.getElementById("var2").value);
    var sub= a - b;
    console.log(sub);
    document.getElementById("sub").innerHTML = sub;
    return sub;
}
