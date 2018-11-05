function myfunction()
{
    var input1 = document.getElementById('fname');
    var input2 = document.getElementById('lname');
    var input3 = document.getElementById('genM');
    //var input4 = document.getElementById('states').value = "None";
    var div = document.getElementById('data_display');
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var state = document.getElementById("states").value;

    div.innerHTML = div.innerHTML + "First Name:" + input1.value;
    div.innerHTML = div.innerHTML + "<br><br> Last name:" + input2.value;
    div.innerHTML = div.innerHTML + "<br><br> Gender:" + gender;
    div.innerHTML = div.innerHTML + "<br><br> State:" + state;
    
    input1.value = "";
    input2.value = "";
    input3.checked = true;
    console.log(input3.checked);
    console.log(gender);
    console.log(state);

}
