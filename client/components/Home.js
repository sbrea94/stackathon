import React from 'react'
import firebase from '../Firestore'
import {Link} from 'react-router-dom'

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Recipe Finder</h1>
        <h2 id="homepage">Choose a category below</h2>
        <Link to="/desserts">
          <button value="desserts">Desserts</button>
        </Link>
        <Link to="/appetizers">
          <button value="appetizers">Appetizers</button>
        </Link>
        <Link to="/maindishes">
          <button value="maindishes">Main Dishes</button>
        </Link>
        <Link to="/sides">
          <button value="sides">Sides</button>
        </Link>
        <Link to="/breakfast">
          <button value="breakfast">Breakfast</button>
        </Link>
      </div>
    )
  }
}
