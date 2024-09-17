let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

var head=document.getElementById("head");
head.innerHTML=recipeObj.title;

var image=document.getElementById("img1");
image.innerHTML=recipeObj.imgSrc;
image.style="width:200px;";

var list=recipeObj.ingredients;
var ing=document.getElementById("ul");
for(let i of list)
{
    var list1=document.createElement("li")
    list1.textContent=i;
    ing.appendChild(list1);
}