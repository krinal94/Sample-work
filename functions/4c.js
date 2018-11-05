function setValue(fName, lName, batmanAge){
    fName = "Wayne";
    lName = 'Batman';
    batmanAge = 27;
    checkPerson(batmanAge);
    alert(setCustInfo(fName,batmanAge));
    displayCustInfo(lName);
}
function setCustInfo(name,i){
    alert("The name is set as: " +name);
    batman_age = i;
    return name + " " +i;
}
function displayCustInfo(name){
    alert( "Name is displayed as: " +name);
        return name + " " +batman_age;
}
function checkPerson(age){
    if(age == batman_age)
        alert("This person seems like Batman");
    else if(age == 24)
        alert("This person may be Robin");
    else
        alert("I dnt know who this joker is!");
}

var batman_age = 27;