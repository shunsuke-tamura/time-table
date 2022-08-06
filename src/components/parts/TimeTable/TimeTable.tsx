import Cell, { CellDataType } from './Cell'
import { DetailType } from './DetailModal';

import Table from 'react-bootstrap/Table';

export type timeTableDataType = {
  1: CellDataType[];
  2: CellDataType[];
  3: CellDataType[];
  4: CellDataType[];
  5: CellDataType[];
  6: CellDataType[];
  7: CellDataType[];
}

type Props = {
  data: timeTableDataType;
}

const TimeTable = ({ data }: Props) => {
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
          {data[1 as keyof timeTableDataType].map((value: CellDataType) =>
            <th key={value["id"]}><Cell data={value} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>2</th>
          {data[2 as keyof timeTableDataType].map((value: CellDataType) =>
            <th key={value["id"]}><Cell data={value} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>3</th>
          {data[3 as keyof timeTableDataType].map((value: CellDataType) =>
            <th key={value["id"]}><Cell data={value} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>4</th>
          {data[4 as keyof timeTableDataType].map((value: CellDataType) =>
            <th key={value["id"]}><Cell data={value} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>5</th>
          {data[5 as keyof timeTableDataType].map((value: CellDataType) =>
            <th key={value["id"]}><Cell data={value} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>6</th>
          {data[6 as keyof timeTableDataType].map((value: CellDataType) =>
            <th key={value["id"]}><Cell data={value} key={value["id"]}></Cell></th>
          )}
        </tr>
        <tr>
          <th>7</th>
          {data[7 as keyof timeTableDataType].map((value: CellDataType) =>
            <th key={value["id"]}><Cell data={value} key={value["id"]}></Cell></th>
          )}
        </tr>
      </tbody>
    </Table>
  )
}

export default TimeTable;