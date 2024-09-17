var arr=[];
function add()
{
    var data=document.getElementById('cartItemTextInput').value
    arr.push(data);
    document.getElementById('cartItemTextInput').value="";

   sum(); 
 
}

function sum()


{
    var dat ="";
    arr.forEach((data)=>
    {
         dat += "<li>"+data+"</li>";
    })

    document.getElementById('ul').innerHTML=dat;
}



// let arr=[]
// function add()
// {
//     var data=document.getElementById('cartItemTextInput').value
//     arr.push(data);
//     document.getElementById('cartItemTextInput').value="";
//     var dat="<li>"+data+"</li>"
//     document.getElementById('ul').innerHTML=dat;


// } 



// var str1= "hi i\n am\r Jagan,\b welcome\t to my\\ page";
// console.log(str1);


// var str1= "hi i am Jagan, welcome to my page";
// console.log(str1.lastIndexOf("i "));


// var str1= "hi i am Jagan, welcome to my page";
// console.log(str1.slice(0,6));


// var str1= "hi i am Jagan, welcome to my page";
// console.log(str1.replace("Jagan","Rasi"));


// var str1= "hi i am Jagan, welcome to my page";
// console.log(str1.toUpperCase());


// var str1= "hi i am Jagan, welcome to my page";
// console.log(str1.charAt(6)); 

// var str2="jagan, rasi, thiru, jahir, dhanush";
// console.log(str2.split(","));


// var str2="jagan & rasi & thiru & jahir & dhanush";
// console.log(str2.split("& "));


// var str2="jagan rasi thiru jahir dhanush madhesh mani kamal bharath raki alagu sisu raj";
// console.log(str2.split(" "));




// var str3="jaihind";
// console.log(str3.split("")); 