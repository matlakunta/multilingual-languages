import './index.css'

const LanguagesList = props => {
  const {languageDetails, isActive, setActiveLanguageFilterId} = props
  const {id, buttonText} = languageDetails

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguage = () => {
    setActiveLanguageFilterId(id)
  }
  return (
    <li className="list-items">
      <button type="button" className={btnClassName} onClick={onClickLanguage}>
        {buttonText}
      </button>
    </li>
  )
}
export default LanguagesList
