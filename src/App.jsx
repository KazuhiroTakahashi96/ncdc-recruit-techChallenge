import { Route, Routes } from "react-router-dom";

import Content from "./components/features/Content";
import NavBar from "./components/features/NavBar";

function App() {
  return (
    <>
      <div className="font-main flex h-screen w-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/:id" element={<Content />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
