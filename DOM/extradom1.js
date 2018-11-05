function myfunction()
{
    var x = document.getElementById("myselect").value;
    console.log(x);
    if(x == 'invisible')
    {
        document.getElementById("para").style.visibility = "hidden";
    }
    else if(x == 'change_color')
    {
        document.getElementById("para").style.color = "red";
    }
    else if(x == 'visible_color')
    {
        document.getElementById("para").style.visibility = "visible";
        document.getElementById("para").style.color = "blue";
    }
    else if(x == 'default')
    {
        document.getElementById("para").style.visibility = "visible";
        document.getElementById("para").style.color = "black";
    }
}
