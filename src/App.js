import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./Input";
import Transcription from "./Transcription";
import GetSummary from "./GetSummary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/convert" element={<Transcription />} />
          <Route path="/summary" element={<GetSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
