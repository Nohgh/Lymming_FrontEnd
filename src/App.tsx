import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/MainPage/Main";
import LogIn from "./pages/LogInPage/LogIn";
import KakaoAuth from "./auth/KakaoAuth";
import Participate from "./pages/ParticipatePage/Participate";
import ParticipateDetail from "./pages/ParticipateDetail/ParticipateDetail";
import TeamBuilding from "./pages/TeamBuilding/TeamBuilding";
import VideoChattingPage from "./pages/VideoChattingPage/VideoChattingPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import MemberPage from "./pages/MemberPage/MemberPage";
import ExhibitionPage from "./pages/ExhibitionPage/ExhibitionPage";
import SharePage from "./pages/SharePage/SharePage";
import ShareDetailPage from "./pages/ShareDetailPage/ShareDetailPage";
import ShareDetailLeader from "./components/ShareDetailComponent/ShareDetailLeader";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/auth" element={<KakaoAuth />}></Route>
        <Route path="/videochat" element={<VideoChattingPage />}></Route>
        <Route path="/participate" element={<Participate />}></Route>
        <Route
          path="/participate/detail/:id"
          element={<ParticipateDetail />}
        ></Route>
        <Route path="/teambuild" element={<TeamBuilding />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/member" element={<MemberPage />}></Route>
        <Route path="/exhibition" element={<ExhibitionPage />}></Route>
        <Route path="/share" element={<SharePage />}></Route>
        <Route path="/share/detail/:id" element={<ShareDetailPage />}></Route>
        <Route
          path="/share/detail/leader"
          element={<ShareDetailLeader />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
