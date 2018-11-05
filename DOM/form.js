
function textboxcolor()
{
    var x = document.forms["myform"]["fname"].value;
    var y = document.forms["myform"]["lname"].value;
//    console.log(x);
//alert(x);
    if(x == "" || !isNaN(x)) 
    {
        document.getElementById("fname").style.backgroundColor = "red";
        if(y== "" || isNaN(y))
        {
        document.getElementById("lname").style.backgroundColor = "red";
        }
    }
    else
    {
        document.getElementById("first_name").innerHTML = x;
        document.getElementById("last_name").innerHTML = y;
    }
    if ( ( myform.gender[0].checked == false ) && ( myform.gender[1].checked == false ) && ( myform.gender[2].checked == false )) 
    {
        alert ( "It is mandatory to select Gender!" ); 
    }
    else
    {
        var rad = document.getElementsByName('gender');
        console.log(rad);
        for(var i = 0; i < rad.length; i++){
            rad[i].onclick = function(){
            document.getElementById('gen').innerText = this.value;
        }
        }
    }

    if(document.getElementById('states').value == '')
    {
        alert('Please select the state');
        return false;
    }
    else
    {
        return true;
    }

    if(document.getElementById('accept').required = false)
    {
        alert("Please accept condition");
        return false;
    }
    else
    {
        return true;
    }
    

}