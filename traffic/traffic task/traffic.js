function Stop(){
    document.getElementById("stop").style.backgroundColor="red" 
    document.getElementById("ready").style.backgroundColor = "white"
    document.getElementById("go").style.backgroundColor = "white"
    document.getElementById("stop0").style.backgroundColor="red"
    document.getElementById("stop1").style.backgroundColor="black"
    document.getElementById("stop2").style.backgroundColor="black"
   }
   function Ready(){
    document.getElementById("ready").style.backgroundColor="yellow" 
    document.getElementById("stop").style.backgroundColor = "white";
    document.getElementById("go").style.backgroundColor = "white";
    document.getElementById("stop0").style.backgroundColor="black"
    document.getElementById("stop1").style.backgroundColor="yellow"
    document.getElementById("stop2").style.backgroundColor="black"
   }
   function Go(){
    document.getElementById("go").style.backgroundColor="green" 
    document.getElementById("stop").style.backgroundColor = "white"
    document.getElementById("ready").style.backgroundColor = "white"
    document.getElementById("stop0").style.backgroundColor="black"
    document.getElementById("stop1").style.backgroundColor="black"
    document.getElementById("stop2").style.backgroundColor="green"
   }