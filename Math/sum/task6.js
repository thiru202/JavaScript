function restart()
{
    var num=document.getElementById("s1");
    var num1=Math.random()*70;
    var num2=Math.floor(num1);
    num.textContent=num2;

    var d=document.getElementById("s3");
    var d1=Math.random()*70;
    var d2=Math.floor(d1);
    d.textContent=d2;

    
    document.getElementById("s5").value="";

    // check();
   
}

function check()
{
    var total=document.getElementById("s5");
    
    

    if(total===(num+d))
    {
        var dis=document.getElementById("p");
        dis.textContent="Congrats";
    }
    else{
        var dis=document.getElementById("p");
        dis.textContent="Failed, Please Try Again"; 
    }

    restart();
    
}
