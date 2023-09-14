import './index.css'

const BrowserCardItem = props => {
  const {browserCardItem, delteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserCardItem
  const onDeleteButton = () => {
    delteItem(id)
  }
  return (
    <li className="list-container">
      <div className="row-container">
        <div className="row">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo-url" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button data-testid="delete" type="button" onClick={onDeleteButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete logo"
          className="delete-button"
        />
      </button>
    </li>
  )
}
export default BrowserCardItem
