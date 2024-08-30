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
      <div className="h-full w-80">
        <div>
          <div className="flex items-center h-8 w-52">
            <Logo />
            <p className="pl-1 h-6 w-40 font-serviceName text-">ServiceName</p>
          </div>
        </div>
        <ul>
          {lists.map((list) => (
            <li key={list.id}>{list.title}</li>
          ))}
        </ul>
        <div className="h-16 w-72 flex justify-end bg-bg-light">
          <Button>
            <div className="bg-main w-24 h-10 flex flex-col items-center rounded ">
              <Edit />
              <p className="h-2.5 text-xs">Edit</p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
