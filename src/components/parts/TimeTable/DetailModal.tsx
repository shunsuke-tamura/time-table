import { useState } from 'react';
// import ToDo from './ToDo';
import { ToDo, EditToDo, ToDoType } from './ToDo';
import './DetailModal.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { BsPencilSquare, BsFillPlusCircleFill } from 'react-icons/bs'
import { AiOutlineSave } from 'react-icons/ai'

export type DetailType = {
  subject: string;
  room: string;
  professor: string;
  todos: ToDoType[];
}

type Props = {
  show: boolean;
  handleClose: VoidFunction;
  periodId: number;
  detail: DetailType;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
};

type ModalProps = {
  handleClose: VoidFunction;
  detail: DetailType;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

type EditModalProps = {
  periodId: number;
  detail: DetailType;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setDetail: React.Dispatch<React.SetStateAction<DetailType>>;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
}

const NormalModal = ({ handleClose, detail, setEdit }: ModalProps) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{detail["subject"]}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalBody'>
        <Stack direction="horizontal" gap={5}>
          <h5>教室</h5>
          <div>{detail["room"]}</div>
        </Stack>
        <Stack direction="horizontal" gap={5}>
          <h5>教員</h5>
          <div>{detail["professor"]}</div>
        </Stack>
        <Stack direction="horizontal" gap={5} className="todo">
          <h5>ToDo</h5>
          <Stack direction='vertical'>
            {detail["todos"].map((value, _) =>
              <ToDo todo={value} key={value["id"]}></ToDo>
            )}
          </Stack>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setEdit(true)}>
          Edit <BsPencilSquare />
        </Button>
      </Modal.Footer>
    </>
  )
}

const EditModal = ({periodId, detail, setEdit, setDetail, setSubject }: EditModalProps) => {
  const [inputSubject, setInputSubject] = useState(detail["subject"])
  const [inputRoom, setInputRoom] = useState(detail["room"])
  const [inputProfessor, setInputProfessor] = useState(detail["professor"])
  const [inputTodos, setInputTodos] = useState(detail["todos"])
  let inputValues: DetailType = {
    subject: inputSubject,
    room: inputRoom,
    professor: inputProfessor,
    todos: inputTodos
  }

  return (
    <>
      <Modal.Header closeButton>
        <Form.Control
          placeholder="教科"
          size="lg"
          value={inputValues["subject"]}
          onChange={(e) => setInputSubject(e.target.value)}
        />
      </Modal.Header>
      <Modal.Body className='modalBody'>
        <Stack direction="horizontal" gap={5}>
          <h5>教室</h5>
          <div>
            <Form.Control
              placeholder="教室"
              value={inputValues["room"]}
              onChange={(e) => setInputRoom(e.target.value)}
            />
          </div>
        </Stack>
        <Stack direction="horizontal" gap={5}>
          <h5>教員</h5>
          <div>
            <Form.Control
              placeholder="教員"
              value={inputValues["professor"]}
              onChange={(e) => setInputProfessor(e.target.value)}
            />
          </div>
        </Stack>
        <Stack direction="horizontal" gap={5} className="todo">
          <h5>ToDo</h5>
          <Stack direction='vertical'>
            {inputTodos.map((value, _) =>
              <EditToDo todo={value} todos={inputValues["todos"]} setInputTodos={setInputTodos} key={value["id"]}></EditToDo>
            )}
            <BsFillPlusCircleFill
              className='plusTodo'
              onClick={() => {
                const newId: string = inputTodos.length != 0
                  ? String(Number(String(inputTodos[inputTodos.length - 1]["id"]).substring(2)) + 1)
                  : String(0)
                const newTodo: ToDoType = {
                  id: Number(String(periodId) + newId),
                  done: false,
                  content: "",
                  deadline: ""
                }
                setInputTodos(inputTodos => [...inputTodos, newTodo])
              }}
            />
          </Stack>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setEdit(false)}>
          Cancel
        </Button>
        <Button
          variant="success"
          onClick={() => {
            setEdit(false)
            setDetail(inputValues)
            setSubject(inputValues["subject"])
          }}
        >
          Save <AiOutlineSave />
        </Button>
      </Modal.Footer>
    </>
  )
}


const DetailModal = ({ show, handleClose, periodId, detail, setSubject }: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [Detail, setDetail] = useState(detail)
  const onClose = () => {
    handleClose();
    setEditMode(false);
  }
  return (
    <Modal show={show} onHide={onClose} centered>
      {editMode
        ? <EditModal periodId={periodId} detail={Detail} setEdit={setEditMode} setDetail={setDetail} setSubject={setSubject}></EditModal>
        : <NormalModal handleClose={onClose} detail={Detail} setEdit={setEditMode}></NormalModal>
      }
    </Modal>
  );
}

export default DetailModal;