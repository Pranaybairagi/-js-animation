var btn = document.querySelector("button");
btn.addEventListener("mouseover",function(){
    btn.textContent = "what do you want"
    btn.style.backgroundColor = "#6699CC";
});

btn.addEventListener("mouseleave",function(){
btn.textContent = "I Don't have anything";
btn.style.backgroundColor = "#fff"
});