function display()
{
    var x = document.getElementById("temp").value;
    var y = (x - 32) * 5/9;
    var z = Math.round(y);
    document.getElementById("demo").innerHTML = z + "  C";
    if(isNaN(x)) 
    {
        document.getElementById("temp").style.backgroundColor = "red";
        var d = prompt("Please enter correct value");
        var c = (d - 32) * 5/9;
        var r = Math.round(c);
        document.getElementById("demo").innerHTML = r + "  C";
    }
}