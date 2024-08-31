import { useEffect, useState } from "react";
import Logo from "../components/icons/Logo";
import Button from "../components/Button";
import Edit from "../components/icons/Edit";

const NavBar = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/content");
      const data = await res.json();
      console.log(data);
      setLists(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="h-full w-[280px] pt-[30px] border-r border-[#f6f8fa]">
        <div className="pl-10 pb-5">
          <div className="flex h-8 w-[200px]">
            <Logo />
            <p className="ml-1 my-1 mr-[3px] h-6 w-[161px] font-serviceName font-bold text-2xl leading-6 text-[#1A1A1A] tracking-normal">
              ServiceName
            </p>
          </div>
        </div>
        <ul className="w-60 h-[882px] ml-10">
          {lists.map((list) => (
            <li
              key={list.id}
              className="h-11 py-2.5 pl-2.5 hover:bg-bg-light hover:rounded text-[#333333] hover:text-[#32a8f8] hover:font-bold"
            >
              <p className="h-6 cursor-pointer">{list.title}</p>
            </li>
          ))}
        </ul>
        <div className="h-[60px] w-[280px] flex justify-end bg-bg-light">
          <Button>
            <div className="bg-main w-[90px] h-10 flex flex-col items-center rounded my-2.5 mr-2.5 ml-[180px]">
              <Edit />
              <p className="h-2.5 text-white text-xs text-[#ffffff]">Edit</p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
