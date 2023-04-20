import { useEffect } from "react";
import { fetchRockets } from "../redux/rockets/rocketsSlice";
import RocketUint from "./rocketUnit";
import { useDispatch, useSelector } from "react-redux";


const RocketsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const rockets = useSelector((store) => store.rockets).rockets;
  console.log('rockets in rocketsList = ',rockets.map((rocket) => rocket.name));
  return (
    <div className="rockets-list">
      {rockets.map((rocket) => <RocketUint rocket={rocket} key={rocket.id}/>)}
    </div>
  );
};

export default RocketsList;