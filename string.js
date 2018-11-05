var str= "Pneumonoultramicroscopicsilicovolcanoconiosis";

function find()
{
var n = str.length;
document.getElementById("demo1").innerHTML = n;
console.log(n);
}

function uppercase()
{
    var uc = str.toLocaleUpperCase();
    document.getElementById("demo2").innerHTML = uc;
    console.log(uc);
}

var str2= "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user"

var s= str2.split(";");
for(var i in s)
{
console.log(s[i]);
}

var Matches = str2.match(/o/gi).length;
console.log("O appeared %s times in the string!" , Matches);

function change()
{
    document.getElementById("demo4").innerHTML = "JavaScript";
}

var str3 = "Javascript notation %^&* notes that structure rules and not context for nothing";
var mat = str3.match(/not/gi).length;
console.log("Not appeared %s times in the string!" , mat);

var resultOfNotSeparatedArrays = str3.split(/not /gi);
    for(let i in resultOfNotSeparatedArrays)
    {
        console.log(resultOfNotSeparatedArrays[i]);
    }