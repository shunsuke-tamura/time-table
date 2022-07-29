import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

type Props = {
  id:   string,
  name: string
}

const UserInfo = ({ id, name }: Props) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className='info'>{id}</div>
      <div className='info'>{name}</div>
      <Button variant="info">ログアウト</Button>
    </Stack>
  )
}

export default UserInfo;