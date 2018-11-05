function func1(a,b,c)
{
    var add= a + b + c;
    console.log(add);
    alert("a is"+a + "b is"+b + "c is"+c);
    document.getElementById("add").innerHTML= add;
    return add;
}
var mul = function(a,b,c)
{
    var x = a * b * c;
    console.log(x);
    alert("a is"+a + "b is"+b + "c is"+c);
    document.getElementById("mul").innerHTML= x;
    return x;
}
