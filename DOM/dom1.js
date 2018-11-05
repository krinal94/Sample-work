var a = document.getElementById('sen1').innerHTML;
console.log(a);
function b()
{   
    console.log(a);     
    alert(a);
}
// second
function c()
{
    document.getElementById("sen1").style.color = "red";
    document.getElementById("sen1").style.backgroundColor = "yellow";
}
//third
function sync()
{
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    txt2.value = txt1.value;
}
//fourth
function changeimg()
{
    document.getElementById("img1").src = "images.png";
}

function hide()
{
    document.getElementById("image").style.display = "none";
}

function show()
{
    document.getElementById("image").style.display = "block";
}

var imageArray = ["charity.jpg", "clogo.jpg", "images.png", "lawfirm.jpg", "Lib.jpg"];

function changeImage()
{
    var x = document.getElementsByClassName("btn");

  var i = 0;
  if (x.id == "next") {
    i += 1;
    document.getElementById("next").src = imageArray[i];
  } else if (x.id == "prev") {
    i -= 1;
    document.getElementById("prev").src = imageArray[i];
  }
}
