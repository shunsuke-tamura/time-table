import { useState } from 'react';
import './ToDo.css'

import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

export type ToDoType = {
  id: string;
  done: boolean;
  content: string;
  deadline: string;
}

type Props = {
  todo: ToDoType;
}

export const ToDo = ({ todo }: Props) => {
  const [checked, setChecked] = useState(todo["done"]);
  return (
    <Stack direction="horizontal" gap={3}>
      <label htmlFor="compleated">
        <input
          type="checkbox"
          id={todo["id"]}
          name={todo["id"]}
          checked={checked}
          value={todo["id"]}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        ></input>
      </label>
      <div>{todo["content"]}</div>
      <div>(〆切: {todo["deadline"]})</div>
    </Stack>
  )
}

export const EditToDo = ({ todo }: Props) => {
  const [inputDone, setInputDone] = useState(todo["done"]);
  const [inputContent, setInputContent] = useState(todo["content"])
  const [inputDeadline, setInputDeadline] = useState(todo["deadline"])

  return (
    <Stack direction="horizontal" gap={3}>
      <label htmlFor="compleated">
        <input
          type="checkbox"
          id={todo["id"]}
          name={todo["id"]}
          checked={inputDone}
          value={todo["id"]}
          onChange={(e) => setInputDone(e.currentTarget.checked)}
        ></input>
      </label>
      <div>
        <Form.Control
          placeholder="内容"
          value={inputContent}
          onChange={(e) => setInputContent(e.target.value)}
          style={{ display: 'inline-block' }}
        />
      </div>
      <div>
        <Form.Control
          placeholder="〆切"
          value={inputDeadline}
          onChange={(e) => setInputDeadline(e.target.value)}
        />
      </div>
    </Stack>
  )
}
