
let bt = document.querySelector(".tweetbuttonn");


function display(){ 
    let txt = document.querySelector(".texttweet").value;
    alert("You tweet:- "+txt);
}

bt.addEventListener("click",display)
