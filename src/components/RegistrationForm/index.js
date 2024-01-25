// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {first: '', last: '', bg1: '', bg2: '', submitted: false}

  onChangeFirst = event => {
    this.setState({first: event.target.value, bg1: ''})
  }

  onChangeLast = event => {
    this.setState({last: event.target.value, bg2: ''})
  }

  onBlurFirst = () => {
    const {first} = this.state
    const bg1 = first.length === 0 ? 'e-bg' : ''
    this.setState({bg1})
  }

  onBlurLast = () => {
    const {last} = this.state
    const bg2 = last.length === 0 && 'e-bg'
    this.setState({bg2})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.onBlurFirst()
    this.onBlurLast()
    const {first, last} = this.state
    if (first.length > 0 && last.length > 0) {
      this.setState({submitted: true, first: '', last: ''})
    }
  }

  successForm = () => (
    <div className="successCard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button onClick={this.changeSubmit} className="sBtn" type="button">
        Submit Another Response
      </button>
    </div>
  )

  changeSubmit = () => {
    this.setState({submitted: false})
  }

  submitForm = () => {
    const {first, last, bg1, bg2} = this.state
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <div className="inp">
          <label htmlFor="first-name">FIRST NAME</label>
          <input
            className={bg1}
            onChange={this.onChangeFirst}
            onBlur={this.onBlurFirst}
            type="text"
            id="first-name"
            placeholder="First Name"
            value={first}
          />
          {bg1.length > 0 && <p className="e">Required</p>}
        </div>
        <div className="inp">
          <label htmlFor="last-name">LAST NAME</label>
          <input
            className={bg2}
            onChange={this.onChangeLast}
            onBlur={this.onBlurLast}
            type="text"
            placeholder="Last Name"
            id="last-name"
            value={last}
          />
          {bg2.length > 0 && <p className="e">Required</p>}
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {submitted} = this.state
    return (
      <div className="bg">
        <h1>Registration</h1>

        {submitted ? this.successForm() : this.submitForm()}
      </div>
    )
  }
}

export default RegistrationForm
