import useFetch from '../../hooks/useFetch'
import './featured.scss'

const Featured = () => {
  const {data, loading, error}=useFetch("http://localhost:5000/api/hotels/countByCity?cities=jaipur,pakistan,dehradun")
  return (
    <div className="featured">
      {loading?"Loading Please Wait..":<><div className="featuredItem">
        <img className='featuredImg' src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h3>{data[0]} Properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="featuredTitles">
          <h1>Pakistan</h1>
          <h3>{data[1]} Properties</h3>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src="https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="featuredTitles">
          <h1>Dehradun</h1>
          <h3>{data[2]} Properties</h3>
        </div>
      </div></>}
    </div>
  )
}

export default Featured