import { Link } from "react-router-dom";

export const RestaurantCard = ({ restaurant, id }) => {
  return (
    <Link key={id} to={"/restaurant/" + id}>
      <div key={id}>{restaurant + id}</div>
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
