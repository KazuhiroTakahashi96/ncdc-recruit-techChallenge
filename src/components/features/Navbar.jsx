import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useContentStore } from "../../store/content";

import Button from "../common/Button";
import Logo from "../icons/Logo";
import Edit from "../icons/Edit";
import Delete from "../icons/Delete";
import Plus from "../icons/Plus";
import Done from "../icons/Done";

const NavBar = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[1];
  const [isDeletable, setIsDeletable] = useState(false);
  const [isCreatable, setIsCreatable] = useState(false);
  const { contents, fetchContents, createContent, deleteContent } =
    useContentStore();

  useEffect(() => {
    try {
      fetchContents();
    } catch (error) {
      console.error(error);
    }
  }, [fetchContents]);

  const onClickEditNavbar = () => {
    setIsDeletable(true);
    setIsCreatable(true);
  };

  const onClickDone = () => {
    setIsDeletable(false);
    setIsCreatable(false);
  };

  const onClickDelete = async (id) => {
    try {
      deleteContent(id);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickCreateNewPage = async () => {
    try {
      createContent();
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
          {contents.map((list) => (
            <li
              key={list.id}
              className={
                id == list.id // idが数字とアルファベットの両方で構成されている場合等を考慮して==
                  ? "w-full bg-bg-light rounded text-[#32a8f8] font-bold"
                  : "w-full text-[#333333]"
              }
            >
              <div className="flex items-center justify-between h-11 py-2.5 pl-2.5">
                <NavLink
                  to={`/${list.id}`}
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      "cursor-auto",
                      isPending ? "" : "",
                      isActive
                        ? "bg-bg-light rounded text-[#32a8f8] font-bold"
                        : "",
                      isTransitioning ? "" : "",
                    ].join(" ")
                  }
                >
                  <p className="h-6 cursor-pointer">{list.title}</p>
                </NavLink>

                {isDeletable && (
                  <Button
                    onClick={() => onClickDelete(list.id)}
                    className={"pl-2.5 pr-[9px] cursor-pointer"}
                  >
                    <Delete />
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="h-[60px] w-[280px] flex items-center bg-bg-light py-2.5 pr-2.5 pl-10">
          {isCreatable ? (
            <>
              <div className="pr-[50px]">
                <Button
                  onClick={onClickCreateNewPage}
                  className={
                    "bg-[#ffffff] w-[90px] h-10 flex flex-col items-center rounded border-2 border-solid border-main"
                  }
                  label={"New page"}
                  labelClassName={"text-white text-[10px] text-main"}
                >
                  <Plus />
                </Button>
              </div>
              <Button
                onClick={onClickDone}
                className={
                  "bg-main w-[90px] h-10 flex flex-col items-center rounded"
                }
                label={"Done"}
                labelClassName={"text-white text-[10px] text-[#ffffff]"}
              >
                <Done />
              </Button>
            </>
          ) : (
            <div className="pl-[140px]">
              <Button
                onClick={onClickEditNavbar}
                className={
                  "bg-main w-[90px] h-10 flex flex-col items-center rounded"
                }
                label={"Edit"}
                labelClassName={"text-white text-[10px] text-[#ffffff]"}
              >
                <Edit />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
