let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Ravi",
    age: 25
};

var body=document.getElementById("body");
body.style="background-color:purple;";

var img=document.getElementById("imgid");
img.innerHTML=profileDetails.imgSrc;
img.style="width:200px;height:200px";

var head=document.getElementById("head");
head.innerHTML=profileDetails.name;

var age=document.getElementById("h3");
age.innerHTML="Age:"+profileDetails.age;