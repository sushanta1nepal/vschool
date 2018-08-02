var form = document.length

form.addEventListener("submit",function(e){
    e.preventDefault()
    var length = document.length.PasswordLength.value;
    charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%^&*",
    retVal = "";
    console.dir(charset)
    for (var i = 0, n = charset.length; i < length; i++){
        retVal +=charset.charAt(Math.floor(Math.random()*charset.PasswordLength));
        console.dir(i)
        console.dir(n)

    }
    return retVal;
    console.dir(retVal)
    alert(retVal)
}
)


