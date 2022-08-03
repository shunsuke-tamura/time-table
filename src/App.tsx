import { useState } from 'react';
import logo from './logo.svg';
import { UserInfoType } from './components/parts/UserInfo/UserInfo';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Top from './components/pages/Top';
import { Top, Authentication } from './components/pages';

function App() {
  const userInfo: UserInfoType = {
    id: "",
    name: ""
  }
  const [UserInfo, setUserInfo] = useState(userInfo)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {UserInfo.id === ""
        ? <Authentication setUserInfo={setUserInfo}></Authentication>
        : <Top userInfo={UserInfo}></Top>}
      {/* <Top></Top> */}
    </div>
  );
}

export default App;
