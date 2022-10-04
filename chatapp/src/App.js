import "./App.css";
// import socketIO from 'socket.io-client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatRoom from "./components/Join/ChatRoom";
import MainForm from "./components/MainForm";

// const ENDPOINT = `http://localhost:4500/`;
// const socket = socketIO(ENDPOINT , { transports : ['websocket']});

function App() {
  return (
    <div
      className="container-fluid bg-light text-dark d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <BrowserRouter>

        {/* <Routes>
          <Route exact path="/" element={<Join />} />
          <Route path="/chat" />
        </Routes> */}

        <Routes>
          <Route index element={<MainForm />} />
          <Route path="chat/:roomId" element={<ChatRoom />} />
          <Route path="*" element={<h1>No match</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
