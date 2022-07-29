import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import './UserInfo.css'

type Props = {
  id:   string,
  name: string
}

const UserInfo = ({ id, name }: Props) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className='info'>学籍番号: {id}</div>
      <div className='info'>氏名: {name}</div>
      <Button variant="info">ログアウト</Button>
    </Stack>
  )
}

export default UserInfo;