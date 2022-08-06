import { TimeTable, UserInfo } from "../parts";
import { UserInfoType } from "../parts/UserInfo/UserInfo";
import { timeTableDataType } from "../parts/TimeTable/TimeTable";
import "./Top.css"
import { readTimeTableData } from "../../lib/crudTimeTableData";

type Props = {
  userInfo: UserInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
}

const Top = ({ userInfo, setUserInfo }: Props) => {
  const data: timeTableDataType = readTimeTableData(userInfo.id)
  return (
    <div className="topWraper">
      <div className="userInfo">
        <UserInfo userInfo={userInfo} setUserInfo={setUserInfo}></UserInfo>
      </div>
      <div className="timeTableWraper">
        <TimeTable id={userInfo.id} data={data}></TimeTable>
      </div>
    </div>
  )
};

export default Top;