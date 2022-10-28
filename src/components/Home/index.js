import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = props => {
  console.log(props)
  const {history, location} = props
  const {state} = location
  if (state === undefined) {
    return (
      <div className="home__container">
        <Header />
        <div className="below__container">
          <h1>Welcome to Meetup</h1>
          <p>Please register for the topic</p>
          <Link to="/register">
            <button type="button" className="register__btn">
              Register
            </button>
          </Link>
          <br />
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
            className="meet__up__image"
          />
        </div>
      </div>
    )
  }
  const {Name, displayText} = state
  return (
    <div className="home__container">
      <Header />
      <div className="below__container">
        <h1>Hello {Name}</h1>
        <h1>Welcome to {displayText}</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
          className="meet__up__image"
        />
      </div>
    </div>
  )
}

export default Home
