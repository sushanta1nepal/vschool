import React from 'react';
import Display from './components/Display';
import Controls from './components/Controls';
import { lapTimer } from './redux';


const App = () => {
    return (
        <div>
            <Display />
            <Controls />
            <lapTimer />
        </div>
    )
}

export default App;
