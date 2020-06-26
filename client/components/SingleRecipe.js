import React from 'react'
import firebase from '../Firestore'
import {Link} from 'react-router-dom'

export default class SingleRecipe extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      ingredients: [],
      instructions: []
    }
  }
  async componentDidMount() {
    let name = ''
    let ingredients = []
    let instructions = []
    const recipe = this.props.location.state.recipe
    const category = this.props.location.state.category

    const db = firebase.firestore()
    const snapshot = await db
      .collection(`Dessert Collection`)
      .doc(`${category}`)
      .collection(`${category} Recipes`)
      .doc(recipe)
      .get()
    const document = snapshot.data()
    name = document.name
    document.ingredients.forEach(ingredient => {
      ingredients.push(ingredient)
    })
    document.instructions.forEach(instruction => {
      instructions.push(instruction)
    })
    this.setState({
      name,
      ingredients,
      instructions
    })
  }
  render() {
    console.log(this.state)
    const {name, ingredients, instructions} = this.state

    return (
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>

        <h1>{name}</h1>
        <h2>Ingredients</h2>
        <ul>
          {ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
        <h2>Instructions</h2>
        <ol>{instructions.map(instruction => <li>{instruction}</li>)}</ol>
        <div id="padding" />
      </div>
    )
  }
}
