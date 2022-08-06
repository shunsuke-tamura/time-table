import { TimeTable, UserInfo } from "../parts";
import { UserInfoType } from "../parts/UserInfo/UserInfo";
import { DetailType } from '../parts/TimeTable/DetailModal';
import { timeTableDataType } from "../parts/TimeTable/TimeTable";
import timeTableData from '../../db/timeTable.json'
import initTimeTableData from '../../db/initTimeTable.json'
import "./Top.css"

export type dbDataType = {
  datas: ({id: string} & timeTableDataType)[]
}

type Props = {
  userInfo: UserInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
}

const Top = ({ userInfo, setUserInfo }: Props) => {
  const dbData: dbDataType = timeTableData;
  const dataIdx: number = dbData.datas.findIndex(el => el.id === userInfo.id);
  const data: timeTableDataType = dbData.datas[dataIdx];
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