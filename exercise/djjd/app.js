var box = document.getElementById("box")

box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "500px 500px 500px 500px red"
} )

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red";
    box.style.boxShadow = "500px 500px 500px 500px blue"
})

box.addEventListener("mouseup",function(){
    box.style.backgroundColor = "yellow";
    box.style.boxShadow = "500px 500px 500px 500px green"
})

box.addEventListener("dblclick", function(){
    box.style.backgroundColor = "green";
    box.style.boxShadow = "500px 500px 500px 500px orange"
})

window.addEventListener("wheel", function(){
    box.style.backgroundColor = "orange";
    box.style.boxShadow = "500px 500px 500px 500px rgb(255,120,142)"
})
window.addEventListener("keydown", function(event){
    console.log(event)
    if(event.code === "KeyB" && box.style.backgroundColor !== "blue"){
        box.style.backgroundColor = "blue"
        box.style.boxShadow = "500px 500px 500px 500px red"
    }else {
        box.style.backgroundColor = "white"
        box.style.boxShadow = "500px 500px 500px 500px black"
    
    }
})
