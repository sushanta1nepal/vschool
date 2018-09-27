import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super() 
            this.state = {
                backgroundColor: 'pink',
                fontFamily: 'sansarif'

            }
        }
        
        componentDidMount() {
            window.addEventListener("keydown", (e) => {
                if(e.code === "KeyB"){
                    this.setState({
                        backgroundColor: 'blue',
                        fontFamily: 'timesnewroman'
                    })
                }
                 else if (e.code ==="KeyI"){
                    this.setState({
                        backgroundColor: 'green',
                        fontFamily: 'italics'
                    })
                }
                else if(e.code ==="KeyA"){
                    this.setState({
                        backgroundColor: 'magenta'
                    })
                }
            })

        }
        
    

    
    componentWillMount() {
        window.removeEventListener("keydown",null)
    }
    render(){
        const styles ={
            container: {
                backgroundColor: this.state.backgroundColor,
                textAlign: 'center'
            },
            title: {
                fontSize: 30,
                fontWeight: 'bolder'
            }
        }
        return (
            <div style = {styles.container}>
                <h1 style = {styles.title}>Hey There</h1>
            </div>
        )
    }
    
}

export default App