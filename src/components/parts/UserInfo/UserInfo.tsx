import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import './UserInfo.css'

export type UserInfoType = {
  id:   string;
  name: string;
}

type Props = {
  userInfo: UserInfoType
}

const UserInfo = ({ userInfo }: Props) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className='info'>学籍番号: {userInfo.id}</div>
      <div className='info'>氏名: {userInfo.name}</div>
      <Button variant="info">ログアウト</Button>
    </Stack>
  )
}

export default UserInfo;