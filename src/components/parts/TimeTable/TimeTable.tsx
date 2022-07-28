import Cell from './Cell'

import Table from 'react-bootstrap/Table';

const TimeTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th><Cell subject='日'></Cell></th>
          <th><Cell subject='月'></Cell></th>
          <th><Cell subject='火'></Cell></th>
          <th><Cell subject='水'></Cell></th>
          <th><Cell subject='木'></Cell></th>
          <th><Cell subject='金'></Cell></th>
          <th><Cell subject='土'></Cell></th>
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