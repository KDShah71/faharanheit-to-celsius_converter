
function toFahren()
{
    x = document.getElementById("fahren").value;
    document.getElementById("result").innerHTML = ((x - 32)*(5/9)) + " F";
}

function toCelc()
{
    y = document.getElementById("cels").value;
    document.getElementById("result").innerHTML = ((y*(9/5) + 32)) + " C";
}


