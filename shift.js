var Names = ["Dipen", "Nirali", "Pooja", "Twinkle", "Prapti", "Akshita", "Atufa", "Manushi"];
document.getElementById("demo1").innerHTML = Names;

Names.shift();
document.getElementById("demo2").innerHTML = Names;

Names.unshift("Dipen");
document.getElementById("demo3").innerHTML = Names;

Names.push("Mahendra");
document.getElementById("demo4").innerHTML = Names;

Names.sort();
document.getElementById("demo5").innerHTML = Names;

Names.reverse();
document.getElementById("demo6").innerHTML = Names;

Names.splice(2 , 0 , "Nishit","Aarsh");
document.getElementById("demo7").innerHTML = Names;

var b=Names.slice(2,8);
document.getElementById("demo8").innerHTML = Names + "<br><br>" + b;