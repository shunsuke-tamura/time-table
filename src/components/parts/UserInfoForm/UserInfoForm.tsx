import { useState } from 'react';
import { AuthInfoType, AuthMode } from '../../pages/Authentication';

import './UserInfoForm.css'

import { GetAuthInfo, AuthCheck, AuthCheckStat, SaveNewUser } from '../../../lib/authentication';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Props = {
  setAuthInfo: React.Dispatch<React.SetStateAction<AuthInfoType>>;
  authMode: AuthMode;
}

const UserInfoForm = ({ setAuthInfo, authMode }: Props) => {
  const [authStat, setAuthStat] = useState(AuthCheckStat.OK)
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return
    }

    let authInfo: AuthInfoType = {
      id: event.target.formId.value,
      name: authMode === AuthMode.SignUp
        ? event.target.formName.value
        : "",
      password: event.target.formPassword.value
    }
    if (authMode === AuthMode.Login) {
      const checkRes: AuthCheckStat = AuthCheck(authInfo)
      if (checkRes === AuthCheckStat.IdNotFound) {
        setAuthStat(AuthCheckStat.IdNotFound)
        return
      }
      if (checkRes === AuthCheckStat.PassDoNotMatch) {
        setAuthStat(AuthCheckStat.PassDoNotMatch)
        return
      }
      authInfo = GetAuthInfo(authInfo)
    }
    else {
      const res: AuthCheckStat = await SaveNewUser(authInfo)
      console.log(res)
      if (res === AuthCheckStat.FailedToRegister) {
        console.log("Cannot Save New User")
        return
      }
      if (res === AuthCheckStat.AlreadyRegisteredUser) {
        setAuthStat(AuthCheckStat.AlreadyRegisteredUser)
        return
      }
    }
    setAuthInfo(authInfo)
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {authStat === AuthCheckStat.IdNotFound
        && <p className='alertMsg'>学籍番号が登録されていません</p>}
      {authStat === AuthCheckStat.PassDoNotMatch
        && <p className='alertMsg'>パスワードが一致しません</p>}
      {authStat === AuthCheckStat.AlreadyRegisteredUser
        && <p className='alertMsg'>この学籍番号は登録されています</p>}
      <Form.Group className="mb-3" controlId="formId">
        <Form.Label>学籍番号</Form.Label>
        <Form.Control placeholder="学籍番号" required />
      </Form.Group>

      {authMode === AuthMode.SignUp
        && (
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>名前</Form.Label>
            <Form.Control placeholder="名前" required />
          </Form.Group>
        )}

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>
      <div className='submitButton'>
        <Button variant="primary" type="submit">Submit</Button>
      </div>
    </Form>
  )
}

export default UserInfoForm;