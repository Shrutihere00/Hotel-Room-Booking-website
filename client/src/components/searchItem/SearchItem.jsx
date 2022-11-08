import { Link } from 'react-router-dom'
import'./searchItem.scss'

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
<img src={item.photos[0]?item.photos[0]:"https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className="siImg" />
<div className="siDesc">
    <h1 className="siTitle">{item.name}</h1>
    <span className="siDistance">{item.distance} from center</span>
    <span className="siTaxiOp">Free airport taxi</span>
    <span className="siSubtitle">{item.discription}</span>
    <span className="siFeatures">Entire Studio <b>&#183;</b> 1 Bathroom <b>&#183;</b> 21m<sup>2</sup> 1 full bed</span>
    <span className="siCancelOp">Free cancellation</span>
    <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>

</div>
<div className="siDetails">
{item.rating&&<div className="siRating">
    <span>Excellent</span>
    <button>{item.rating}</button>
</div>}
<div className="siDetailTexts">
    <span className="siPrice">${item.cheapestPrice}</span>
    <span className="siTaxOp">Includes taxes and fees</span>
    <Link to={`/hotels/${item._id}`}>
    <button className="siCheckButton">See Availability</button></Link>
</div>
</div>
    </div>
  )
}

export default SearchItem