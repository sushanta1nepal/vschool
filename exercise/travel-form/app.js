var form = document.passenger

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    var foodArr = []

    var checkBox = document.querySelectorAll("input[name=diet]:checked")

    console.dir(checkBox)
    for (var i = 0; i < checkBox.length; i++){
        foodArr.push(checkBox[i].value)
        foodArr.toString
    }
    var fName = form.fname.value
    var Lname = form.lname.value

    var gen = form.gender.value

    var age = form.age.value

    var loca = form.location.value

    alert(`
    First Name: ${fName}
    Last Name:  ${Lname}
    Age:        ${age}
    Location:   ${loca}
    Diet:       ${foodArr}
    `)
   

})
