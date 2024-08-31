import { useEffect, useState } from "react";
import Logo from "../components/icons/Logo";
import Button from "../components/Button";
import Edit from "../components/icons/Edit";
import Delete from "../components/icons/Delete";
import Plus from "../components/icons/Plus";
import Done from "../components/icons/Done";

const NavBar = () => {
  const API_URL = "http://localhost:3000/content";
  const [lists, setLists] = useState([]);
  const [isDeletable, setIsDeletable] = useState(false);
  const [isCreatable, setIsCreatable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log(data);
      setLists(data);
    };
    fetchData();
  }, []);

  const onClickEditNavbar = () => {
    setIsDeletable(!isDeletable);
    setIsCreatable(!isCreatable);
  };

  const onClickDone = () => {
    setIsDeletable(!isDeletable);
    setIsCreatable(!isCreatable);
  };

  const onClickDelete = async (id) => {
    console.log(`id: ${id}`);
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      console.log(await res);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickCreateNewPage = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "タイトル",
          body: "コンテンツ",
        }),
      });
      const data = await res.json();

      setLists((prev) => [...prev, data]);
    } catch (error) {
      console.error(error);
    }
  };

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
              className="flex items-center justify-between h-11 py-2.5 pl-2.5 hover:bg-bg-light hover:rounded text-[#333333] hover:text-[#32a8f8] hover:font-bold"
            >
              <p className="h-6 cursor-pointer">{list.title}</p>
              {isDeletable && (
                <div
                  onClick={() => onClickDelete(list.id)}
                  className="pl-2.5 pr-[9px] cursor-pointer"
                >
                  <Delete />
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="h-[60px] w-[280px] flex items-center bg-bg-light py-2.5 pr-2.5 pl-10">
          {isCreatable ? (
            <>
              <div className="pr-[50px]">
                <Button>
                  <div
                    onClick={onClickCreateNewPage}
                    className="bg-[#ffffff] w-[90px] h-10 flex flex-col items-center rounded border-2 border-solid border-main"
                  >
                    <Plus />
                    <p className="text-white text-[10px] text-main">New page</p>
                  </div>
                </Button>
              </div>
              <Button>
                <div
                  onClick={onClickDone}
                  className="bg-main w-[90px] h-10 flex flex-col items-center rounded"
                >
                  <Done />
                  <p className="text-white text-[10px] text-[#ffffff]">Done</p>
                </div>
              </Button>
            </>
          ) : (
            <div className="pl-[140px]">
              <Button>
                <div
                  onClick={onClickEditNavbar}
                  className="bg-main w-[90px] h-10 flex flex-col items-center rounded"
                >
                  <Edit />
                  <p className="text-white text-[10px] text-[#ffffff]">Edit</p>
                </div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
