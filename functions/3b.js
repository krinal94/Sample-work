var lName = "Vyas"
function setValue(fName, lName, age)
{
     fName= 'Krinal';
     
     age= '23';

    name= fName + lName;
    console.log(name);
    setCustInfo(lName);
    displayCustInfo(fName);
}

function setCustInfo(name)
{
    alert("The name is set as:"+name);
}
function displayCustInfo(name)
{
    alert("Name is displayed as:"+name);
}