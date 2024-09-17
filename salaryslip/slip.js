function slip()
{
    var basic=document.getElementById("basic").value;

    var hra=document.getElementById("hra").value=basic*(10/100);
    var hra1=parseInt(hra);

    var transport_allowance=document.getElementById("trans").value=basic*(7/100);
    var transport_allowance1=parseInt(transport_allowance);

    var medical_allowance=document.getElementById("medical").value=basic*(25/100);
    var medical_allowance1=parseInt(medical_allowance);

    var leave_travel_allowance=document.getElementById("lta").value=basic*(25/100);
    var leave_travel_allowance1=parseInt(leave_travel_allowance);

    var various_allowance=document.getElementById("va").value=basic*(8/100);
    var various_allowance1=parseInt(various_allowance);

    var provident_fund=document.getElementById("pf").value=basic*(10/100);
    var provident_fund1=parseInt(provident_fund);

    // var net_salary=document.getElementById("netsalary").value=(basic + hra + transport_allowance + medical_allowance + leave_travel_allowance + various_allowance);
    var net_salary=document.getElementById("netsalary").value=(basic + hra1 + transport_allowance1 + medical_allowance1 + leave_travel_allowance1 + various_allowance1);
    var net_salary1=parseInt(net_salary);

}
function btn()
{
    var basic=document.getElementById("basic").value;

    var hra=document.getElementById("hra").value=basic*(10/100);
    var hra1=parseInt(hra);

    var transport_allowance=document.getElementById("trans").value=basic*(7/100);
    var transport_allowance1=parseInt(transport_allowance);

    var medical_allowance=document.getElementById("medical").value=basic*(25/100);
    var medical_allowance1=parseInt(medical_allowance);

    var leave_travel_allowance=document.getElementById("lta").value=basic*(25/100);
    var leave_travel_allowance1=parseInt(leave_travel_allowance);

    var various_allowance=document.getElementById("va").value=basic*(8/100);
    var various_allowance1=parseInt(various_allowance);

    var provident_fund=document.getElementById("pf").value=basic*(10/100);
    var provident_fund1=parseInt(provident_fund);

    // var net_salary=document.getElementById("netsalary").value=(basic + hra + transport_allowance + medical_allowance + leave_travel_allowance + various_allowance);
    var net_salary=document.getElementById("netsalary").value=(basic + hra1 + transport_allowance1 + medical_allowance1 + leave_travel_allowance1 + various_allowance1);
    var net_salary1=parseInt(net_salary);


    
    document.getElementById("tbody").innerHTML="<tr><td>"+basic+"</td><td>"+hra1+"</td><td>"+transport_allowance1+"</td><td>"+medical_allowance1+"</td><td>"+leave_travel_allowance1+"</td><td>"+various_allowance1+"</td><td>"+provident_fund1+"</td><td>"+net_salary1+"</td></tr>";

}