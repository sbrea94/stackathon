import firebase from '../Firestore'

const SET_CATEGORIES = 'SET_CATEGORIES'

const setCategories = categories => ({type: SET_CATEGORIES, categories})

export const fetchCategories = () => async dispatch => {
  try {
    const db = firebase.firestore()
    const snapshot = await db.collection('Dessert Collection').get()
    console.log('snap', snapshot.data())
    dispatch(setCategories(snapshot.data()))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
