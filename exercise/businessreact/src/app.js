import React from'react';
import Navbar from'./navbar';
import Footer from'./footer';
import Images from'./images';
import Infor from './infor';
import Products from './products';
import { withRouter, Switch, Route } from 'react-router-dom';

const App = ()=>{
    return(
        <div>
            <Navbar />
                <Switch>
                    <Infor />
                    <Images />
                <   Footer />
                <   Route path='/products' component={Products} />
                </Switch>
        </div>
    )
}

export default withRouter(App);