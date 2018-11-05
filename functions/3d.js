function setValue(fName, lName, age)
{
     fName= 'Krinal';
     lName= 'Patel';
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

function displayCustInfo(name,i)
{
    alert("Name is displayed as:"+name);
    k = name + " "+i;
    k="DATA VANISHED";
    alert(k);
    return k;
}