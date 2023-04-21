import { fetchMissions } from "../redux/missions/missionsSlice";
import { addMission, removeMission } from "../redux/profile/profileSlice"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const MissionsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const profile = useSelector((store) => store.profile.profile);
  const missions = useSelector((store) => store.missions.missions);

  const checkMemberStatus = (mission) => {
    const isMember = profile[0].missions.includes(mission.mission_name);
    return isMember ? "Member" : "Not a member";
  };

  const toggleMembership = (mission) => {
    const isMember = profile[0].missions.includes(mission.mission_name);
    if (isMember) {
      return "Leave Mission";
    }
    return "Join Mission";
  };
  
  const joinLeaveMission = (e) => {
    const missionName = e.target.id;
    const isMember = profile[0].missions.includes(missionName);
    if (isMember) {
      dispatch(removeMission(missionName));
    } else {
      dispatch(addMission(missionName));
    }
  };
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
          <td>
            {
              checkMemberStatus(mission)
            }
          </td>
          <td>
            <button id={mission.mission_name} type="button" onClick={(e) => joinLeaveMission(e)}>{toggleMembership(mission)}</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>;
};

export default MissionsList;