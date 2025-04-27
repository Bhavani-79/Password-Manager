import {Component} from 'react'

import {v4 as uuid4} from 'uuid'

import './index.css'

import PasswordItem from '../PasswordItem'

class Password extends Component {
  state = {
    isPasswordShow: false,
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    isSearch: '',
    passwordList: [],
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChangeSearch = event => {
    this.setState({isSearch: event.target.value})
  }

  addItem = event => {
    event.preventDefault()

    const {passwordInput, usernameInput, websiteInput} = this.state

    const newItem = {
      id: uuid4(),
      name: usernameInput,
      site: websiteInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newItem],
      usernameInput: '',
      websiteInput: '',
      passwordInput: '',
    }))
  }

  onChangePasswordShow = () => {
    this.setState(prevState => ({isPasswordShow: !prevState.isPasswordShow}))
  }

  onClickItem = id => {
    const {passwordList} = this.state

    const data = passwordList.filter(each => each.id !== id)

    this.setState({passwordList: data})
  }

  renderNoPassword = () => (
    <div className="no-password-container">
      <img
        className="no-password-image"
        alt="no passwords"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      />
      <p className="no-password-para">No Passwords</p>
    </div>
  )

  render() {
    const {
      passwordInput,
      websiteInput,
      usernameInput,
      isSearch,
      passwordList,
      isPasswordShow,
    } = this.state

    const result = passwordList.filter(each =>
      each.site.toLowerCase().includes(isSearch.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          className="logo"
          alt="app logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
        />
        <div className="password-container">
          <form className="form-container" onSubmit={this.addItem}>
            <h1 className="para">Add New Password</h1>
            <div className="input-container">
              <img
                className="input-image"
                alt="website"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
              <input
                onChange={this.onChangeWebsite}
                className="input"
                type="text"
                placeholder="Enter Website"
                value={websiteInput}
              />
            </div>
            <div className="input-container">
              <img
                className="input-image"
                alt="username"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
              <input
                value={usernameInput}
                onChange={this.onChangeUsername}
                className="input"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-container">
              <img
                className="input-image"
                alt="password"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
              />
              <input
                value={passwordInput}
                className="input"
                onChange={this.onChangePassword}
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="form-button">
              Add
            </button>
          </form>
          <img
            alt="password manager"
            className="password-container-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <div className="password-item-container">
          <div className="password-count-search-container">
            <div className="password-cunt-container">
              <h1 className="your-title">Your Passwords</h1>
              <p className="count-para">{result.length}</p>
            </div>
            <div className="input-container input1">
              <img
                className="input-image"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
              <input
                className="input"
                type="search"
                placeholder="Search"
                value={isSearch}
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-password-container">
            <input
              type="checkbox"
              className="checkbox"
              id="label"
              onChange={this.onChangePasswordShow}
            />
            <label className="label" htmlFor="label">
              Show passwords
            </label>
          </div>
          {result.length === 0 ? (
            this.renderNoPassword()
          ) : (
            <ul className="unorder">
              {result.map(each => (
                <PasswordItem
                  details={each}
                  key={each.id}
                  isPasswordShow={isPasswordShow}
                  onClickItem={this.onClickItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Password
