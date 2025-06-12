import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  return (
    <div>
      <h1>Menu + {resId}</h1>
      <h1>Restaurant Name</h1>
      <ul>
        <li>Biryani</li>
        <li>Coffee</li>
        <li>Tea</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
