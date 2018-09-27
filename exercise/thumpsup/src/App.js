import React from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
    constructor(){
        super(){
            this.state = {
                status: true
            }
        }
        handleClick = e => {
            this.setState(prevState =>{
                return {
                    status: !prevState.status
                }
            })
        }
        render() {
            return (
                <div>
                    <Greeting img   />
                    <Follow status ={this.state.status}
                    handleClick={this.handleClick} />
                </div>

            );
        }
    }
    }

export default TM_FILENAME_BASE;
