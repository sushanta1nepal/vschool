import React from 'react'

const Navbar = () =>{
    const pages = ['Home', 'Locations', 'About', 'Contact']

    const displayPages = pages.map((page)=>{
        return <h4 className = "navbar">{page}</h4>
})
return (
    <nav>
        <p className="displayPages">{displayPages}</p>
    </nav>
)
}



export default Navbar;