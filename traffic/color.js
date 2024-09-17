function stop()
{
    document.getElementById("stop").style.backgroundColor="red";
    document.getElementById("stop").style.color="black";

    document.getElementById("ready").style.backgroundColor="";
    document.getElementById("ready").style.color="white";
    document.getElementById("go").style.backgroundColor="";
    document.getElementById("go").style.color="white";

    document.getElementById("stop1").style.backgroundColor="red";
    document.getElementById("ready1").style.backgroundColor="white";
    document.getElementById("go1").style.backgroundColor="white";


}

function ready()
{
    document.getElementById("stop").style.backgroundColor="";
    document.getElementById("stop").style.color="white";
    

    document.getElementById("ready").style.backgroundColor="yellow";
    document.getElementById("ready").style.color="black";

    document.getElementById("go").style.backgroundColor="";
    document.getElementById("go").style.color="white";

    document.getElementById("stop1").style.backgroundColor="white";
    document.getElementById("ready1").style.backgroundColor="yellow";
    document.getElementById("go1").style.backgroundColor="white";
}

function go()
{
    document.getElementById("stop").style.backgroundColor="";
    document.getElementById("stop").style.color="white";
    

    document.getElementById("ready").style.backgroundColor="";
    document.getElementById("ready").style.color="white";

    document.getElementById("go").style.backgroundColor="green";
    document.getElementById("go").style.color="black";

    document.getElementById("stop1").style.backgroundColor="white";
    document.getElementById("ready1").style.backgroundColor="white";
    document.getElementById("go1").style.backgroundColor="green";
}


