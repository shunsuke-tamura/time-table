import { useState } from 'react';
import './ToDo.css'

import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import { BsFillTrashFill } from 'react-icons/bs'

export type ToDoType = {
  id: number;
  done: boolean;
  content: string;
  deadline: string;
}

type Props = {
  todo: ToDoType;
}

type EditProps = {
  todo: ToDoType;
  todos: ToDoType[];
  setInputTodos: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}

export const ToDo = ({ todo }: Props) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <label htmlFor="compleated">
        <input
          type="checkbox"
          id={String(todo["id"])}
          name={String(todo["id"])}
          checked={todo["done"]}
          value={todo["id"]}
          onChange={() => todo["done"]}
        ></input>
      </label>
      <div>{todo["content"]}</div>
      <div>(〆切: {todo["deadline"]})</div>
    </Stack>
  )
}

export const EditToDo = ({ todo, todos, setInputTodos }: EditProps) => {
  const [inputDone, setInputDone] = useState(todo["done"]);
  const [inputContent, setInputContent] = useState(todo["content"])
  const [inputDeadline, setInputDeadline] = useState(todo["deadline"])
  let inputValues: ToDoType = {
    id: todo["id"],
    done: inputDone,
    content: inputContent,
    deadline: inputDeadline
  }

  const updateList = (newTodo: ToDoType) => {
    setInputTodos(
      todos.map((value, _) => (value["id"] === inputValues["id"] ? newTodo : value))
    )
  }

  const deleteTodo = () => {
    const targetIdx: number = todos.findIndex((value) => value === todo)
    const after = [...todos]
    after.splice(targetIdx, 1)
    setInputTodos(after)
  }

  return (
    <Stack direction="horizontal" gap={3}>
      <label htmlFor="compleated">
        <input
          type="checkbox"
          id={String(todo["id"])}
          name={String(todo["id"])}
          checked={inputDone}
          value={todo["id"]}
          onChange={(e) => {
            setInputDone(e.currentTarget.checked)
            updateList({ id: todo["id"], done: e.currentTarget.checked, content: todo["content"], deadline: todo["deadline"] })
          }}
        ></input>
      </label>
      <div>
        <Form.Control
          placeholder="内容"
          value={inputContent}
          onChange={async (e) => {
            setInputContent(e.target.value)
            updateList({ id: todo["id"], done: todo["done"], content: e.target.value, deadline: todo["deadline"] })
          }}
          style={{ display: 'inline-block' }}
        />
      </div>
      <div>
        <Form.Control
          placeholder="〆切"
          value={inputDeadline}
          onChange={(e) => {
            setInputDeadline(e.target.value)
            updateList({ id: todo["id"], done: todo["done"], content: todo["content"], deadline: e.target.value })
          }}
        />
      </div>
      <div>
        <BsFillTrashFill className='deleteButton' onClick={deleteTodo}/>
      </div>
    </Stack>
  )
}
