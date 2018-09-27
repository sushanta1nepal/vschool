import React from 'react';
import Navbar from './Navbar';
import Location from './Location'

const App = () => {
    const vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },
        {
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },
        {
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },
        {
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },
        {
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
    ]
    const Vacations = vacationSpots.map((location, i)=>{
        return <Location key={location.place+i}
                         place={location.place}
                         price={location.price}
                         timeToGo={location.timeToGo} />

    })
    return(
        <div>
            <Navbar />
            {Vacations}
        </div>
    )
}

export default App