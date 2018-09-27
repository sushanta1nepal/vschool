import React from 'react';
import Superhero from './Superhero';

class App extends React.Component{

     superHeros = [
        {
            name: "Ironman",
            location: "New York",
            imgUrl: "http://www.pngall.com/wp-content/uploads/2016/05/Iron-Man-Free-Download-PNG.png",
            catchPhrase(){
              alert("I's Soooooooooorrrrrry!!!!!!!")
            }
        },
        {
            name: "Hulk",
            location: "New York",
            imgUrl: "https://vignette.wikia.nocookie.net/disney/images/f/fc/AoU_Hulk_01.png/revision/latest?cb=20150310161343",
            catchPhrase(){
                alert("GGGGGRRRRRHHHHH....!!!!")
            }
        },
        {
            name: "Thor",
            location: "Asgard",
            imgUrl: "https://vignette.wikia.nocookie.net/maafanficuniverse/images/e/e9/Thor_-_Infinity_War.png/revision/latest?cb=20180505194631",
            catchPhrase(){
                 alert("Im the Lord of Thunder")
            }
        },
        {
            name: "SpiderMan",
            location: "New York",
            imgUrl: "https://orig00.deviantart.net/58e7/f/2018/114/1/8/infinity_war__iron_spider___transparent__by_camo_flauge-dc9rwk8.png",
            catchPhrase(){
                alert ("Your neighborhood spidey")  
            }
        },    
    ]
    render(){
    const heros = this.superHeros.map((names, i)=>{
        return <Superhero key = {names.name+i}
                      name={names.name}
                      location={names.location}
                      imgUrl={names.imgUrl}
                      catchPhrase={names.catchPhrase} />
    })
    return (
        <div>
            {heros}
        </div>
    );
}
}

export default App;
