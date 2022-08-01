import { useState } from 'react';
import './ToDo.css'

import Stack from 'react-bootstrap/Stack';

const ToDo = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack direction="horizontal" gap={3}>
      <label htmlFor="compleated">
        <input
          type="checkbox"
          id="compleated"
          name="compleated"
          checked={checked}
          value={"id"}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        ></input>
      </label>
      <div>小テスト</div>
      <div>(〆切: 12/31)</div>
    </Stack>
  )
}

export default ToDo