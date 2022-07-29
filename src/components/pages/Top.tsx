import { TimeTable, UserInfo } from "../parts";
import "./Top.css"

const Top = () => {
  return (
    <div className="topWraper">
      <UserInfo id="20238264" name="hogefuga"></UserInfo>
      <div>
        <TimeTable></TimeTable>
      </div>
    </div>
  )
};

export default Top;