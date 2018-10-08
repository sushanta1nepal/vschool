import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { Switch, Route } from 'react-router-dom'
import Contact from './Contact.js'

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                {/* <Route exact path='/' component={ Home } />
                <Route path='/about' component={ About } /> */}
                <Route path='/Contact' component={ Contact } />
            </Switch>
            <Footer />
        </div>
    )
}

export default App