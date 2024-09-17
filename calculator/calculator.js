function add()
{
    var a=document.getElementById("num").value;
    var a1=parseInt(a);
    var b=document.getElementById("num1").value;
    var b1=parseInt(b);

    var total= a1 + b1;
    

    document.getElementById("tbid").innerHTML="<tr><td>"+ total + "</td></tr>";
}

function sub()
{
    var a=document.getElementById("num").value;
    var a1=parseInt(a);
    var b=document.getElementById("num1").value;
    var b1=parseInt(b);

    var total= a1 + b1;

    var total1= a1 - b1;
    

    document.getElementById("tbid").innerHTML="<tr><td>"+total+"</td><td>"+total1 + "</td></tr>";   //+ 
}

function multi()
{
    var a=document.getElementById("num").value;
    var a1=parseInt(a);
    var b=document.getElementById("num1").value;
    var b1=parseInt(b);

    var total= a1 + b1;

    var total1= a1 - b1;

    var total2=a1*b1;
    

    document.getElementById("tbid").innerHTML="<tr><td>"+total+"</td><td>"+total1 +"</td><td>"+total2+ "</td></tr>";
}

function divide()
{
    var a=document.getElementById("num").value;
    var a1=parseInt(a);
    var b=document.getElementById("num1").value;
    var b1=parseInt(b);

    var total= a1 + b1;

    var total1= a1 - b1;

    var total2=a1*b1;

    var total3=a1/b1;
    

    document.getElementById("tbid").innerHTML="<tr><td>"+total+"</td><td>"+total1 +"</td><td>"+total2+"</td><td>"+total3+ "</td></tr>";
}

function modules()
{
    var a=document.getElementById("num").value;
    var a1=parseInt(a);
    var b=document.getElementById("num1").value;
    var b1=parseInt(b);

    var total= a1 + b1;

    var total1= a1 - b1;

    var total2=a1*b1;

    var total3=a1/b1;

    var total4=a1%b1;
    

    document.getElementById("tbid").innerHTML="<tr><td>"+total+"</td><td>"+total1 +"</td><td>"+total2+"</td><td>"+total3+"</td><td>"+total4+ "</td></tr>";
}