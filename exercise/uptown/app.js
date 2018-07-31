var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function up1(arr){
    console.log(arr.join(' '))
}


function up2(arr){
    arr.reverse();
    console.log(arr.join(' '));
}


function up3(arr){
    var result =[];
    for(var i = 0; i < arr.length; i+=2){
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}


function up4(arr){
    for(var i = 0; i < arr.length; i+=2){
        if(i != arr.length - 1){
            var temp = arr[i];
            arr[i] = arr[i+1]
            arr[i+1] = temp;
        }
    }
    console.log(arr.join(' '));
}
up3(lyrics);