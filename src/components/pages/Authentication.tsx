import { useState, useEffect } from "react";
import { UserInfoForm } from "../parts";
import { UserInfoType } from "../parts/UserInfo/UserInfo";
import './Authentication.css'

import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export enum AuthMode {
  Login,
  SignUp,
}

export type AuthInfoType = {
  id: string;
  name: string;
  password: string;
}

type Props = {
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
}

const Authentication = ({ setUserInfo }: Props) => {
  const authInfo: AuthInfoType = {
    id: "",
    name: "",
    password: ""
  }
  const [AuthInof, setAuthInfo] = useState(authInfo)
  useEffect(() => {
    if (AuthInof.id === "") { return }
    setUserInfo(AuthInof)
  })
  const [key, setKey] = useState('login');

  return (
    <Modal
      show={true}
      centered
    >
      <Modal.Body>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => k && setKey(k)}
          className="mb-3 nav-fill tabs"
        >
          <Tab eventKey="login" title="Login">
            <UserInfoForm setAuthInfo={setAuthInfo} authMode={AuthMode.Login}></UserInfoForm>
          </Tab>
          <Tab eventKey="signUp" title="Sign Up">
            <UserInfoForm setAuthInfo={setAuthInfo} authMode={AuthMode.SignUp}></UserInfoForm>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default Authentication;