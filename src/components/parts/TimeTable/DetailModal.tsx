import ToDo from './ToDo';
import './DetailModal.css'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';

type Props = {
  show: boolean;
  handleClose: VoidFunction;
};

const DetailModal = ({ show, handleClose }: Props) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>並列分散</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalBody'>
        <Stack direction="horizontal" gap={5}>
          <h5>教室</h5>
          <div>教養123</div>
        </Stack>
        <Stack direction="horizontal" gap={5}>
          <h5>教員</h5>
          <div>hogefuga</div>
        </Stack>
        <Stack direction="horizontal" gap={4} style={{ alignItems: 'flexStart' }}>
          <h5>ToDo</h5>
          <Stack direction='vertical'>
            <ToDo></ToDo>
            <ToDo></ToDo>
            <ToDo></ToDo>
            <ToDo></ToDo>
          </Stack>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailModal;