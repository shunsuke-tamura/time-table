import Cell from './Cell'

import Table from 'react-bootstrap/Table';

const TimeTable = () => {
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
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
        </tr>
        <tr>
          <th>2</th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
        </tr>
        <tr>
          <th>3</th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
        </tr>
        <tr>
          <th>4</th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
        </tr>
        <tr>
          <th>5</th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
          <th><Cell subject='国語'></Cell></th>
        </tr>
      </tbody>
    </Table>
  )
}

export default TimeTable;