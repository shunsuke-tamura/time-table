import { useState } from 'react';
import './ToDo.css'

import Stack from 'react-bootstrap/Stack';

export type ToDoType = {
  id: string;
  done: boolean;
  content: string;
  deadline: string;
}

type Props = {
  todo: ToDoType;
}

const ToDo = ({ todo }: Props) => {
  let [checked, setChecked] = useState(false);
  checked = todo["done"]
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

export default ToDo