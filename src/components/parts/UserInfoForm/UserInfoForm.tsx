import { useState } from 'react';
import { AuthInfoType } from '../../pages/Authentication';

import './UserInfoForm.css'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Props = {
  setAuthInfo: React.Dispatch<React.SetStateAction<AuthInfoType>>;
}

const UserInfoForm = ({ setAuthInfo }: Props) => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    else {
      const authInfo: AuthInfoType = {
        id: event.target.formId.value,
        name: event.target.formName.value,
        password: event.target.formPassword.value
      }
      setAuthInfo(authInfo)
    }
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formId">
        <Form.Label>学籍番号</Form.Label>
        <Form.Control placeholder="学籍番号" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>名前</Form.Label>
        <Form.Control placeholder="名前" required />
      </Form.Group>

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