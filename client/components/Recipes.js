import React from 'react'
import firebase from '../Firestore'
import {Link} from 'react-router-dom'

export default class Recipes extends React.Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    let category = this.props.location.state.item

    let recipes = []
    const db = firebase.firestore()
    const snapshot = await db
      .collection(`Dessert Collection`)
      .doc(`${category}`)
      .collection(`${category} Recipes`)
      .get()

    snapshot.forEach(doc => {
      recipes.push(doc.data().name)
    })
    this.setState({
      recipes
    })
  }

  render() {
    console.log(this.state)
    const recipes = this.state.recipes
    const category = this.props.location.state.item

    return (
      <div id="recipesBody">
        <div>
          <Link to="/">Home</Link>
        </div>
        <h2 id="homepage">
          Choose a delicious {this.props.location.state.item} recipe below!
        </h2>
        {recipes.map(recipe => {
          return (
            <Link
              key={recipe}
              to={{pathname: '/singlerecipe', state: {recipe, category}}}
            >
              <p>{recipe}</p>
            </Link>
          )
        })}
      </div>
    )
  }
}
