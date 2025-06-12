import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { RestaurantCard, WithBorderCard } from "./ResturantCard";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  const WithBorderCardCompo = WithBorderCard(RestaurantCard);
  console.log(typeof WithBorderCardCompo);
  if (onlineStatus == false) {
    return <h1>Looks like you are offline</h1>;
  }
  return (
    <div>
      <h1>Body Component</h1>
      {["rest1", "rest2", "rest3"]?.map((each, idx) => (
        <RestaurantCard restaurant={each} key={idx} id={idx} />
      ))}
      {["rest1", "rest2", "rest3"]?.map((each, idx) => (
        <WithBorderCardCompo restaurant={each} key={idx} id={idx} />
      ))}
    </div>
  );
};

export default Body;
