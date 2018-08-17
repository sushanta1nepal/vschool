var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
    console.log(xhr)
    if (xhr.readyState ==4 && xhr.status == 200){
        var data  = JSON.parse(xhr.responseText)
        
        displayData(data)
    }
}


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
xhr.send()

function displayData(h){
    var display = document.getElementById('pokeName')
    var pokeArr = h.objects[0].pokemon
    pokeArr.sort(function(a, b){
        if(a.name < b.name) return -1;
        if(a.name >b.name) return 1;
        return 0;
    })
    for (var i = 0; i < pokeArr.length ; i++){
        display.innerHTML += `<li>${pokeArr[i].name[0].toUpperCase() + pokeArr[i].name.slice(1)}</li>`
        console.log(pokeArr[i].name)
    }

}
