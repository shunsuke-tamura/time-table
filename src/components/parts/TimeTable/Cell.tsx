import { useState } from 'react';
import DetailModal from './DetailModal'
import { DetailType } from './DetailModal';

import './Cell.css'

type Props = {
  subject: string;
  detail: DetailType;
  periodId: number;
};

const Cell = ({ subject, detail, periodId }: Props) => {
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
      <DetailModal show={show} handleClose={handleClose} periodId={periodId} detail={detail} setSubject={setSubject}></DetailModal>
    </>
  )
}

export default Cell;