"use strict";
document.title = "Project 1";
document.body.style.cssText = `
margin: 0; 
padding: 0; 
background-color: rgb(236, 236, 236); 
font-family: Arial, Helvetica, sans-serif;
`;
let header = document.createElement("header");
header.className = "Header";
header.style.cssText = `
display: flex;
justify-content: space-between;
padding : 20px;
background-color: white;
align-items: center;
`;
let logo = document.createElement("div");
logo.className = "Logo";
logo.innerHTML = "Besho";
logo.title = "Website Logo";
logo.style.cssText = `
font-weight: bold;
color: rgb(35, 169, 110);
font-size: 1.5em;            
`;
header.appendChild(logo);
let menu = document.createElement("div");
menu.className = "menu";
menu.title = "Website Logo";
menu.style.cssText = `
display: flex;
gap: 20px;
font-size: 1.1em;
`;
menu.innerHTML = `
<span>Home</span>
<span>About</span>
<span>Services</span>
<span>Contact</span>
`;
header.appendChild(menu);
let content = document.createElement("div");
content.style.cssText = `
display : flex;
padding: 20px;
flex-wrap : wrap;
justify-content: center;
gap : 20px;
background-color: rgb(236, 236, 236); 
box-sizing: border-box;
min-height: calc(100vh - 142px);
`;
for (let i = 0; i < 15; i++) {
    let product = document.createElement("div");
    product.className = "product";
    product.innerHTML = ` ${i + 1} <br> Product`;
    product.style.cssText = `
    display:flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 20px;
    background-color: white;
    border: 1px solid rgb(221, 221, 211);
    width: calc((100% - 40px) /4);
    `;
    content.appendChild(product);
}
let footer = document.createElement("footer");
footer.innerHTML = "Copyright 2023 © by beshoy samy.";
footer.style.cssText = `
background-color: rgb(35, 169, 110);
font-size: 25px;
padding: 25px;
text-align: center;
color: white;
`;
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);