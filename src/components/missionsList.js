import { fetchMissions } from "../redux/missions/missionsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const MissionsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const missions = useSelector((store) => store.missions.missions);
  console.log('missions = ', missions);
  return <table>
    <thead>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>status</th>
        <th>options</th>
      </tr>
    </thead>
    <tbody>
      {missions.map((mission) => (
        <tr key={mission.mission_id}>
          <td>{mission.mission_name}</td>
          <td>{mission.description}</td>
          <td />
          <td>
            <button type="button">Join/Leave</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>;
};

export default MissionsList;