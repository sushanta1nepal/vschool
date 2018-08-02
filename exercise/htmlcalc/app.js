var add = document.addition

add.addEventListener("submit", function(event){
    event.preventDefault();

    var a = (Number(add.add1.value) + Number(add.add2.value))
    console.dir(a);
    document.getElementById("addres").innerHTML = a
})

var sub = document.subtract

sub.addEventListener("submit", function(event){
    event.preventDefault();

    var b =(Number(sub.sub1.value)-Number(sub.sub2.value))

    console.dir(b);
    document.getElementById("subres").innerHTML = b
})

var mul = document.multi

mul.addEventListener("submit", function(event){
    event.preventDefault();

    var c = (Number(mul.mul1.value)*Number(mul.mul2.value))

    console.dir(c);
    document.getElementById("mulres").innerHTML = c
})
