import { useState } from 'react';
import DetailModal from './DetailModal'
import { DetailType } from './DetailModal';

import './Cell.css'

export type CellDataType = {
  id: number;
  subject: string;
  detail: DetailType;
}

type Props = {
  userId: string;
  data: CellDataType;
};

const Cell = ({ userId, data }: Props) => {
  const { subject, detail, id }: CellDataType = data
  const [Subject, setSubject] = useState(subject)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cell" onClick={() => {
        handleShow()
      }}>
        {Subject}
      </div>
      <DetailModal
        show={show} 
        handleClose={handleClose} 
        userId={userId} 
        periodId={id} 
        detail={detail} 
        setSubject={setSubject} 
      />
    </>
  )
}

export default Cell;