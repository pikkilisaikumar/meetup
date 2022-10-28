import React from 'react'

import Header from '../Header'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends React.Component {
  state = {Name: '', activeId: topicsList[0].id, error: false}

  inputRegisterField = e => {
    e.preventDefault()
    const {history} = this.props
    const {Name, activeId} = this.state
    const {displayText} = topicsList.find(each => each.id === activeId)
    if (Name === '') {
      this.setState({error: true})
    } else {
      history.replace('/', {Name, displayText})
    }
  }

  render() {
    const {Name, activeId, error} = this.state
    return (
      <div className="register__component">
        <Header />
        <div className="register__input__container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <div>
            <h1>Let us join</h1>
            <form onSubmit={this.inputRegisterField}>
              <div>
                <label htmlFor="name">NAME</label>
                <br />
                <input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  value={Name}
                  onChange={e => this.setState({Name: e.target.value})}
                />
              </div>
              <div>
                <label htmlFor="name">Topics</label>
                <br />
                <select
                  value={activeId}
                  onChange={e => this.setState({activeId: e.target.value})}
                >
                  {topicsList.map(each => (
                    <option key={each.id} value={each.id}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Register Now</button>
              {error && <p>Please enter your name</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
