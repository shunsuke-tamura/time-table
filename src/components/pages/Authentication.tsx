import { useState, useEffect } from "react";
import { UserInfoForm } from "../parts";
import { UserInfoType } from "../parts/UserInfo/UserInfo";

import Modal from 'react-bootstrap/Modal';

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
  return (
    <Modal
      show={true}
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserInfoForm setAuthInfo={setAuthInfo}></UserInfoForm>
      </Modal.Body>
    </Modal>
  );
};

export default Authentication;