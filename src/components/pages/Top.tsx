import { TimeTable, UserInfo } from "../parts";
import "./Top.css"

const Top = () => {
  return (
    <div className="topWraper">
      <div className="userInfo">
        <UserInfo id="20238264" name="hogefuga"></UserInfo>
      </div>
      <div className="timeTableWraper">
        <TimeTable></TimeTable>
      </div>
    </div>
  )
};

export default Top;