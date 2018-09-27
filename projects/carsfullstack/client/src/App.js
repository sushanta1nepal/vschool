import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import CarsList from './components/CarsList';
import About from './components/About' 

const App = () =>{
    return (
        <div>
            <Switch>
                <Route exact path='/' component= {Main} />
                <Route path='/carsList' component={CarsList} />
                <Route path='/About' component= {About} />
            </Switch>
        </div>
    )
}

export default App