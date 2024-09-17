function add()
{
    var num1=document.getElementById("span1").textContent;
    num1=parseInt(num1);
    
    if((num1>=0)||(num1<=0))
    {
        num1++;
        document.getElementById("span1").innerHTML=num1;

       var total= document.getElementById("span2").value=(num1*750);
       document.getElementById("span2").innerHTML=total;
    }
}
function sub()
{
    var num=document.getElementById("span1").textContent;
    num=parseInt(num);
    
    if((num>=0)||(num<=0))
    {
        num--;
        document.getElementById("span1").innerHTML=num;
    }
    var total= document.getElementById("span2").value=(num*750);
    document.getElementById("span2").innerHTML=total;
}



// let end=10;
// for(let st=1;st<=end;st++)
// {
//     for(let st1=1;st1<=end;st1++)
//     {
//         console.log(st,"",st1);
//     }
// }


// let end=11;  // kg mama
// for(let st=1;st<=end;st++)
// {
//     for(let str=1;str<=end;str++)
//     {
//         console.log(st,str);
//     }
// }

// let end=10;
// let st=1;
// while(st>=end)
// {
// console.log(st);
// st++;  or //st+=1 or //st=st+1
// }

// let end=12; // kg mama
// let st=0;
// while(st<=end)
// {
//     console.log(st);
//     st++;

// }

// let st=0;
// var arr=[10,20,30,40,50,60];
// while(st<arr.length)
// {
//     console.log(arr[st]);
//     st++;
// }

// let st=1;  // kg mama
// var arr=[11,22,33,44,55,66];
// while(st<=arr.length)
// {
//     console.log(st);
//     st++;
// }

// i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

