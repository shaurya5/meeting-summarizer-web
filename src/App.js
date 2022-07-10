import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./Input";
import UpdatedTranscription from "./UpdatedTranscription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/convert" element={<UpdatedTranscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
