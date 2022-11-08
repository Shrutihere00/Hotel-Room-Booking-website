import useFetch from "../../hooks/useFetch";
import "./propertyList.scss";

const PropertyList = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/hotels/countByType");
  const propertyListImages = [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className="pList">
      {loading ? (
        "Loading Please Wait.."
      ) : (
        <>
          {data &&
              propertyListImages.map((item,index) => {
             return <div key={index} className="pListItem">
                <img
                  src={item}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[index]?.type}</h1>
                  <h3>
                    {data[index]?.count} {data[index]?.type}s
                  </h3>
                </div>
              </div>; 
            })}
        </>
      )}
    </div>
  );
};

export default PropertyList;
