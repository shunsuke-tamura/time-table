import { TimeTable, UserInfo } from "../parts";
import { UserInfoType } from "../parts/UserInfo/UserInfo";
import "./Top.css"

type Props = {
  userInfo: UserInfoType;
}

const Top = ({ userInfo }: Props) => {
  return (
    <div className="topWraper">
      <div className="userInfo">
        <UserInfo userInfo={userInfo}></UserInfo>
      </div>
      <div className="timeTableWraper">
        <TimeTable></TimeTable>
      </div>
    </div>
  )
};

export default Top;