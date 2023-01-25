import './index.css'

const LanguageItem = props => {
  const {languageItemDetails} = props
  const {imageUrl, imageAltText} = languageItemDetails

  return <img className="each-image" src={imageUrl} alt={imageAltText} />
}
export default LanguageItem
