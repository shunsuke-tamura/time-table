import Cell from './Cell'
import { DetailType } from './DetailModal';
import timeTableData from '../../../db/timeTable.json'

import Table from 'react-bootstrap/Table';

type timeTableDataType = {
  1: {
    id: string;
    subject: string | null;
    detail: DetailType | null;
  }[];
  2: {
    id: string;
    subject: string | null;
    detail: DetailType | null;
  }[];
  3: {
    id: string;
    subject: string | null;
    detail: DetailType | null;
  }[];
  4: {
    id: string;
    subject: string | null;
    detail: DetailType | null;
  }[];
  5: {
    id: string;
    subject: string | null;
    detail: DetailType | null;
  }[];
  6: {
    id: string;
    subject: string | null;
    detail: DetailType | null;
  }[];
  7: {
    id: string;
    subject: string | null;
    detail: DetailType | null;
  }[];
}

const TimeTable = () => {
  const data: timeTableDataType = timeTableData;
  return (
    <Table bordered>
      <thead>
        <tr>
          <th></th>
          <th> 日 </th>
          <th> 月 </th>
          <th> 火 </th>
          <th> 水 </th>
          <th> 木 </th>
          <th> 金 </th>
          <th> 土 </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          {data[1 as keyof timeTableDataType].map((value, _) =>
            <th key={value["id"]}><Cell subject={value["subject"]} detail={value["detail"]} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>2</th>
          {data[2 as keyof timeTableDataType].map((value, idx) =>
            <th key={value["id"]}><Cell subject={value["subject"]} detail={value["detail"]} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>3</th>
          {data[3 as keyof timeTableDataType].map((value, idx) =>
            <th key={value["id"]}><Cell subject={value["subject"]} detail={value["detail"]} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>4</th>
          {data[4 as keyof timeTableDataType].map((value, idx) =>
            <th key={value["id"]}><Cell subject={value["subject"]} detail={value["detail"]} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>5</th>
          {data[5 as keyof timeTableDataType].map((value, idx) =>
            <th key={value["id"]}><Cell subject={value["subject"]} detail={value["detail"]} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>6</th>
          {data[6 as keyof timeTableDataType].map((value, idx) =>
            <th key={value["id"]}><Cell subject={value["subject"]} detail={value["detail"]} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>7</th>
          {data[7 as keyof timeTableDataType].map((value, idx) =>
            <th key={value["id"]}><Cell subject={value["subject"]} detail={value["detail"]} key={value["id"]}></Cell></th>
          )}
        </tr>
      </tbody>
    </Table>
  )
}

export default TimeTable;