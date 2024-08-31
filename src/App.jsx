import Content from "./features/Content";
import NavBar from "./features/NavBar";

function App() {
  return (
    <>
      <div className="font-main flex max-h-[1024px] max-w-[1440px]">
        <NavBar />
        <Content />
      </div>
    </>
  );
}

export default App;
