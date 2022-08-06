import { useEffect, useState } from 'react';
import { Top, Authentication } from './components/pages';
import { UserInfoType } from './components/parts/UserInfo/UserInfo';
import { readTimeTableDB } from './lib/crudTimeTableData';
import { readUserDataDB } from './lib/authentication';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const userInfo: UserInfoType = {
    id: "",
    name: ""
  }
  const [UserInfo, setUserInfo] = useState(userInfo)
  useEffect(() => {
    readTimeTableDB()
    readUserDataDB()
  }, [UserInfo])
  return (
    <div className="App">
      {UserInfo.id === ""
        ? <Authentication setUserInfo={setUserInfo}></Authentication>
        : <Top userInfo={UserInfo} setUserInfo={setUserInfo}></Top>}
    </div>
  );
}

export default App;
