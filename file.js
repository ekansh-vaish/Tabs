let f1 = document.querySelector("button");
let f2 = document.querySelector("button");
let f3 = document.querySelector("button");
let f4 = document.querySelector("button");

let g1 = document.querySelector("p");
let g2 = document.querySelector("p");
let g3 = document.querySelector("p");
let g4 = document.querySelector("p");

let h1 = document.querySelector(".content1");
let h2 = document.querySelector(".content2");
let h3 = document.querySelector(".content3");
let h4 = document.querySelector(".content4");

let display = 0;

function hideshow()
{
if(display == 1)
{
h1.style.display = 'block';
display = 0;
}
else{
h1.style.display = 'none';
display = 1;
}
}


 let display1 =0;
function hideshow1()
{
if(display1 == 1)
{
h2.style.display= 'block';
display1 = 0;
}
else{
h2.style.display = 'none';
display1 = 1;
}
}



let display2 =0;
function hideshow2()
{
if(display2 == 1)
{
h3.style.display= 'block';
display2 = 0;
}
else{
h3.style.display = 'none';
display2 = 1;
}
}


let display3 =0;
function hideshow3()
{
if(display3 == 1)
{
h4.style.display= 'block';
display3 = 0;
}
else{
h4.style.display = 'none';
display3 = 1;
}
}
