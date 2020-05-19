var li = document.querySelectorAll("li");

li.forEach(li => li.addEventListener("click", () => strikeOff(li)));

var span = document.querySelectorAll("span");

span.forEach(sp => sp.addEventListener("click", (e) => {
    fadeOut(sp);
    e.stopPropagation();
}))


var input = document.querySelector("input");

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        var todoText = input.value;
        addToDo(todoText); 
        input.value = "";
        
    }
})


var plus = document.querySelector(".fa-plus");

plus.addEventListener("click", (e) => {
    var input = document.querySelector("input");
    if (input.style.display === "none") {
        unfade(input);
    }
    else {
        fade(input);
    }

    
})


function addToDo(text) {
    var li = document.createElement("li");
    var span = document.createElement("SPAN");
    span.innerHTML = '<i class="fa fa-trash"></i> ';
    span.addEventListener("click", (e) => {
        fadeOut(span);
        e.stopPropagation();});
    li.appendChild(span);
    li.appendChild(document.createTextNode(text));
    document.querySelector("ul").appendChild(li);
    li.addEventListener("click", () => strikeOff(li)) 
}

function strikeOff(li) {
    li.classList.toggle("striked");
}

function fadeOut(el) {
    el.parentNode.classList.add("hide");
    el.parentNode.classList.add("show");
    setTimeout(() => el.parentNode.remove(el), 400); 
}

function fadeOutSelf(el) {
    el.classList.add("hide");
    el.classList.add("show");
    setTimeout(() => el.style.display = "none", 400); 

}

function fadeIn(el) {
    el.parentNode.classList.add("show");
    el.parentNode.classList.add("hide");
    setTimeout(() => el.parentNode.remove(el), 400);     
}

function fadeInSelf(el) {
    el.classList.add("show");
    el.classList.add("hide");
    setTimeout(() => {
        el.style.display = "block";
        el.classList.add("input") 
    }, 400); 
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}