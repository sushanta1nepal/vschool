import React from 'react';
import Vehicle from './Vehicle';

const CarList = props =>{
    return(
        <div>
            { props.vehicles.map(car =>
            <Vehicle 
            {...car}
                key={car._id}
                handleDelete={props.handleDelete}
                getVehicles={props.getVehicles}/>
                )}
        </div>
    )
}

export default CarList
