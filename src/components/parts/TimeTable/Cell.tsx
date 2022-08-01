import { useState } from 'react';
import DetailModal from './DetailModal'
import { DetailType } from './DetailModal';

import './Cell.css'

type Props = {
  subject: string | null;
  detail: DetailType | null;
};

const Cell = ({ subject, detail }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={subject ? "cell" : "nullcell"} onClick={() => {
        handleShow()
      }}>
        {subject}
      </div>
      {detail && (
        <DetailModal show={show} handleClose={handleClose} detail={detail}></DetailModal>
      )}
    </>
  )
}

export default Cell;