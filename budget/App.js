function totalAmount()
{
    var amt=document.getElementById("update").value;
    amt=parseInt(amt);

    var exp=document.getElementById("expense").value;
    exp=parseInt(exp);

    var wallet=document.getElementById("wallet").value=amt;

    var exps=document.getElementById("expenses").value=exp;

    var balance=document.getElementById("balance").value=amt-exp;

    // var data=document.getElementById("table").innerHTML=exp;
    var data=document.getElementById("tbody").innerHTML=exp;

}

