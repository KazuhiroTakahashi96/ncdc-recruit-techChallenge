import { Route, Routes } from "react-router-dom";

import Content from "./pages/Content";
import Navbar from "./components/features/Navbar";

function App() {
  return (
    <>
      <div className="font-main flex max-h-[1024px] max-w-[1440px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="w-full h-full"></div>} />
          <Route path="/:id" element={<Content />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
