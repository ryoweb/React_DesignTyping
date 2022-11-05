// header
import Header from './components/Header/Header'
// home
import Home from './components/Home/Home'
// slector
import Selector from './components/Selecor/Selector'
// myAccount
import MyPage from './components/MyPage/MyPage'
import ChatArea from './components/ChatArea/ChatArea'
// editor-contents
import MyProfile from './components/MyProfile/MyProfile'
import DropDownMenu from './components/DropDownMenu/DropDownMenu'
import DomSousa from './components/DomSousa/DomSousa'
import Position from './components/Position/Position'
//-----------------------------------------
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/selector" element={<Selector />} />
           <Route path="/myprofile" element={<MyProfile />} />
           <Route path="/chatroom" element={<ChatArea />} />
           <Route path="/mypage" element={<MyPage />} />
           <Route path="/dropdownmenu" element={<DropDownMenu />} />
           <Route path="/domsousa" element={<DomSousa />} />
           <Route path="/position" element={<Position />} />
        </Routes>
    </Router>
  );
}

export default App;