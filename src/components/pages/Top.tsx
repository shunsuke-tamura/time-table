import { TimeTable, UserInfo } from "../parts";
import { UserInfoType } from "../parts/UserInfo/UserInfo";
import { DetailType } from '../parts/TimeTable/DetailModal';
import { timeTableDataType } from "../parts/TimeTable/TimeTable";
import timeTableData from '../../db/timeTable.json'
import initTimeTableData from '../../db/initTimeTable.json'
import "./Top.css"

type dbDataType = {
  datas: ({id: string} & timeTableDataType)[]
}

type Props = {
  userInfo: UserInfoType;
}

const Top = ({ userInfo }: Props) => {
  let data: timeTableDataType;
  const dbData: dbDataType = timeTableData;
  const dataIdx: number = dbData.datas.findIndex(el => el.id === userInfo.id);
  if (dataIdx === -1) {
    data = initTimeTableData;
  }
  else {
    data = dbData.datas[dataIdx];
  }
  return (
    <div className="topWraper">
      <div className="userInfo">
        <UserInfo userInfo={userInfo}></UserInfo>
      </div>
      <div className="timeTableWraper">
        <TimeTable data={data}></TimeTable>
      </div>
    </div>
  )
};

export default Top;