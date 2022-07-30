import Cell from './Cell'
import timeTableData from '../../../db/timeTable.json'

import Table from 'react-bootstrap/Table';

type timeTableDataType = {
  1: string[];
  2: string[];
  3: string[];
  4: string[];
  5: string[];
  6: string[];
  7: string[];
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
          {data[1 as keyof timeTableDataType].map((value, idx) =>
            <th key={idx}><Cell subject={value} key={idx}></Cell></th>
          )}
        </tr>
        <tr>
          <th>2</th>
          {data[2 as keyof timeTableDataType].map((value, idx) =>
            <th key={idx}><Cell subject={value} key={idx}></Cell></th>
          )}
        </tr>
        <tr>
          <th>3</th>
          {data[3 as keyof timeTableDataType].map((value, idx) =>
            <th key={idx}><Cell subject={value} key={idx}></Cell></th>
          )}
        </tr>
        <tr>
          <th>4</th>
          {data[4 as keyof timeTableDataType].map((value, idx) =>
            <th key={idx}><Cell subject={value} key={idx}></Cell></th>
          )}
        </tr>
        <tr>
          <th>5</th>
          {data[5 as keyof timeTableDataType].map((value, idx) =>
            <th key={idx}><Cell subject={value} key={idx}></Cell></th>
          )}
        </tr>
        <tr>
          <th>6</th>
          {data[6 as keyof timeTableDataType].map((value, idx) =>
            <th key={idx}><Cell subject={value} key={idx}></Cell></th>
          )}
        </tr>
        <tr>
          <th>7</th>
          {data[7 as keyof timeTableDataType].map((value, idx) =>
            <th key={idx}><Cell subject={value} key={idx}></Cell></th>
          )}
        </tr>
      </tbody>
    </Table>
  )
}

export default TimeTable;