import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./Input";
import Transcription from "./Transcription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/convert" element={<Transcription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
