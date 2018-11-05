var sen = "";
var quote = [
    "A friend in need is friend in deed",
    "Cleanliness is Godliness",
    "Slow and steady wins the race",
    "An apple a day keeps the doctor away",
    "Practice makes man perfect",
    "Your attitude determines your direction",
    "Treat others the way you want to be treated",
    "Today is a great day to learn something new",
    "Where there is a will, there is a way",
    "Preparation is the key to success"
];
quote.forEach(displayQuotes);


function displayQuotes(value)
{
    sen = sen + value + "<br>";
    console.log(quote.length);
    displayArrayLength(quote);
    console.log(quote.pop());
    displayReverseArray(quote);

}

function displayReverseArray(arr)
{
    
    console.log(quote.reverse());
}

function displayArrayLength(arr)
{
    alert("Length is " + arr.length);
    for(var i = 0; i<arr.length; i++)
    {
        console.log(arr[i]);
        document.write("<br>" + arr[i]);
    }
}

