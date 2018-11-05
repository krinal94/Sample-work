function my_menu()
{
    var a = new Date();

    if(a.getDay() == 1)
    {
        document.getElementById("menu").innerHTML = a.getDay()+" "+ a.getDate()+ " "+ "Today's special dish is Pasta";
    }
    if(a.getDay() == 2)
    {
        document.getElementById("menu").innerHTML =a.getDay()+" "+ a.getDate()+ " " + "Today's special dish is Tacos";
    }
    if(a.getDay() == 3)
    {
        document.getElementById("menu").innerHTML = a.getDate() + " "+ "Today's special dish is Pizza";
    }
}