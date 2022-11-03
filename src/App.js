// header
import Header from './components/Header/Header'
// home
import Home from './components/Home/Home'
// slector
import Selector from './components/Selecor/Selector'
// myAccount
import MyPage from './components/MyPage/MyPage'
// editor-contents
import MyProfile from './components/MyProfile/MyProfile'
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
           <Route path="/mypage" element={<MyPage />} />
        </Routes>
    </Router>
  );
}

export default App;
