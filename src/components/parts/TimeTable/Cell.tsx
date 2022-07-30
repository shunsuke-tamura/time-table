import { useState } from 'react';
import DetailModal from './DetailModal'

import './Cell.css'

type Props = {
  subject: string;
};

const Cell = ({ subject }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cell" onClick={() => {
        handleShow()
      }}>
        {subject}
      </div>
      <DetailModal show={show} handleClose={handleClose}></DetailModal>
    </>
  )
}

export default Cell;