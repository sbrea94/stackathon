import React from 'react'
import firebase from '../Firestore'
import {Link} from 'react-router-dom'

export default class Dessert extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async handleClick(evt) {
    await this.props.setCategory({category: evt.target.value})
  }

  async componentDidMount() {
    let categories = []
    const db = firebase.firestore()
    const snapshot = await db.collection('Dessert Collection').get()
    snapshot.forEach(doc => {
      categories.push(doc.data().category)
    })
    this.setState({
      categories
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="homepage">
        <h1>Welcome to the Dessert Page!</h1>
        <h2 id="homepage">Choose your desired dessert category...</h2>

        {this.state.categories.map(item => {
          return (
            <div key={item}>
              <Link to={{pathname: '/recipes', state: {item}}}>
                <button
                  type="button"
                  onClick={evt => {
                    this.handleClick(evt)
                  }}
                  key={item}
                  value={item}
                >
                  {item}
                </button>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}
