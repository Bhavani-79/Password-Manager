import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
  'dark-blue',
]

const PasswordItem = props => {
  const {details, isPasswordShow, onClickItem} = props

  const {name, password, site, id} = details

  const initial = site.slice(0, 1)

  const backgroundColor = `initial-para ${
    initialContainerBackgroundClassNames[Math.ceil(Math.random() * 7)]
  }`

  console.log(
    Math.ceil(Math.random() * initialContainerBackgroundClassNames.length - 1),
  )
  const onDelete = () => {
    onClickItem(id)
  }

  return (
    <li className="list">
      <div className="initial-item-container">
        <p className={backgroundColor}>{initial.toUpperCase()}</p>
        <div className="items-container">
          <p className="para">{site}</p>
          <p className="para">{name}</p>
          {isPasswordShow ? (
            <p className="para">{password}</p>
          ) : (
            <img
              className="stars-img"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
      </div>

      <button
        className="delete-button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          alt="delete"
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
        />
      </button>
    </li>
  )
}

export default PasswordItem
