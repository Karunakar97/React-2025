import { Link } from "react-router-dom";

export const RestaurantCard = (props) => {
  const { restaurant, id } = props;
  return (
    <Link
      key={id}
      to={"/restaurant/" + id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        key={id}
        style={{
          borderWidth: 1,
          borderColor: "#000000",
          borderStyle: "solid",
          borderRadius: 5,
          padding: 10,
        }}
      >
        <h1>{restaurant?.name}</h1>
        <p>Location: {restaurant?.location}</p>
        <p>Location: {restaurant?.rating}</p>
      </div>
    </Link>
  );
};

//higher order component this enhance the component and returns
export const WithBorderCard = (ResCard) => {
  console.log(ResCard, "ResCard");
  return (props) => {
    console.log(props, "props");
    return (
      <div style={{ borderWidth: 1 }}>
        <ResCard {...props} />
      </div>
    );
  };
};
