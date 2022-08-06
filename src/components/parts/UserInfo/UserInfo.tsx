import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import './UserInfo.css'

export type UserInfoType = {
  id:   string;
  name: string;
}

type Props = {
  userInfo: UserInfoType;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
}

const UserInfo = ({ userInfo, setUserInfo }: Props) => {
  const logout = () => {
    const initUserInfo: UserInfoType = {
      id: "",
      name: ""
    }
    setUserInfo(initUserInfo)
  }
  return (
    <Stack direction="horizontal" gap={3}>
      <div className='info'>学籍番号: {userInfo.id}</div>
      <div className='info'>氏名: {userInfo.name}</div>
      <Button 
        variant="info"
        onClick={logout}
      >
        ログアウト
      </Button>
    </Stack>
  )
}

export default UserInfo;