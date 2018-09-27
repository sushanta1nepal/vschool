import React from 'react'
import { connect } from 'react-redux'
import { addItem } from './redux/index.js'
import ItemList from './ItemList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      image: '',

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state)
  }


  // handleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })

  // }

  // handleSubmit =e => {
  //   e.preventDefault()
  //   const newItem = {
  //     title: this.state.title,
  //     description: this.state.description,
  //     image: this.state.image
  //   }
  //   this.setState(prevState =>({
  //     listItem: [...prevState.listItem, newItem],
  //     title: '',
  //     desciption:'',
  //     image: ''
  //   }))
  // }

  render() {
    return (
      <div id='wrapper'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='give title'
            onChange={this.handleChange}
            value={this.state.title}
            required />

          <input
            type='text'
            name='description'
            placeholder='describe'
            onChange={this.handleChange}
            value={this.state.description} />

          <input
            type='text'
            name='image'
            placeholder='image URL'
            onChange={this.handleChange}
            value={this.state.image}
            required />

          <button>Submit</button>
          <ItemList data={this.props.items} />
        </form>
      </div>
    )
  }
}

export default connect(state => state, { addItem })(App);
