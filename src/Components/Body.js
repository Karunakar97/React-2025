import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { RestaurantCard, WithBorderCard } from "./ResturantCard";
import { addToCart } from "../Utils/CartSlice";
import { useDispatch } from "react-redux";
import { resData } from "../Utils/Constants";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");

  const WithBorderCardCompo = WithBorderCard(RestaurantCard);
  const dispatch = useDispatch();
  if (onlineStatus == false) {
    return <h1>Looks like you are offline</h1>;
  }

  const fetchData = async () => {
    const data = await fetch("https://randomuser.me/api/?results=10");
    const jsonData = await data.json();
    // console.log(jsonData?.results);
    setRestaurants(resData);
    setFilteredRestaurant(resData);
  };

  const onClickSearch = () => {
    const filteredData = restaurants?.filter((each) =>
      each?.name?.includes(searchText)
    );
    setFilteredRestaurant(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Body Component</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: 15,
          columnGap: 15,
          marginBottom: 15,
        }}
      >
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={onClickSearch}>Search</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          rowGap: 15,
          columnGap: 15,
        }}
      >
        {filteredRestaurant?.map((each, idx) => (
          <RestaurantCard restaurant={each} key={idx} id={idx} />
        ))}
      </div>
      {/* {resData?.map((each, idx) => (
        <WithBorderCardCompo restaurant={each} key={idx} id={idx} />
      ))} */}
      <button onClick={() => dispatch(addToCart("check"))}>add</button>
    </div>
  );
};

export default Body;
