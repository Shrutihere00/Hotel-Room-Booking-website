import "./featuredProperties.scss";
import useFetch from "../../hooks/useFetch";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/hotels?featured=true");
  return (
    <div className="fp">
      {loading ? (
        "Loading Please Wait.."
      ) : (
        <>
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="fpItem">
                  <img className="fpImg" src={item.photos[0]? item.photos[0]:"https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" />
                  <span className="fpName">{item?.name}</span>
                  <span className="fpCity">{item?.city}</span>
                  <span className="fpPrice">
                    Starting from ${item?.cheapestPrice}
                  </span>
                 {item.rating&& <div className="fpRating">
                    <button>{item?.rating}</button>
                    <span>Good</span>
                  </div>}
                </div> 
              );
            })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
