import React from 'react'
import ReactDOM from 'react-dom'
import App from'./App'
import store from './redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// store.subscribe(() => {
//     console.log(store.getState())
// },

ReactDOM.render(
       <Provider store={ store }>
           <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root')
)

