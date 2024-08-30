import Content from "./features/Content";
import NavBar from "./features/NavBar";

function App() {
  return (
    <>
      <div className="font-main flex h-screen">
        <NavBar />
        <Content />
      </div>
    </>
  );
}

export default App;
