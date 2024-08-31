import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import Edit from "../components/icons/Edit";
import Cancel from "../components/icons/Cancel";
import Save from "../components/icons/Save";

const Content = () => {
  const API_URL = "http://localhost:3000/content";
  const { id } = useParams();

  const [content, setContent] = useState({});
  const [isEditableTitle, setIsEditableTitle] = useState(false);
  const [isEditableContent, setIsEditableContent] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();

        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchContent();
  }, [id]);

  // Titleの編集関連
  const onClickEditTitle = () => {
    setIsEditableTitle(true);
  };
  const onClickCancelTitle = () => {
    setIsEditableTitle(false);
  };
  const onClickSaveTitle = async () => {
    try {
      // const res = await fetch(`${API_URL}`);

      setIsEditableTitle(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Contentの編集関連
  const onClickEditContent = () => {
    setIsEditableContent(true);
  };
  const onClickCancelContent = () => {
    setIsEditableContent(false);
  };
  const onClickSaveContent = () => {
    try {
      setIsEditableContent(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="h-full w-full px-10 pt-[30px]">
        <div className="flex h-[935px] w-full p-[30px] bg-bg-light rounded-2xl">
          <div className="w-full">
            <div className="flex items-center justify-start">
              <div className="w-[910px] h-10 px-[30px] mb-5 font-bold text-2xl text-[#333333] leading-10 tracking-normal">
                {content.title}
              </div>
              <div className="pl-5 pb-5">
                {isEditableTitle ? (
                  <div className="flex items-center justify-center gap-[10px]">
                    <Button>
                      <div
                        onClick={onClickCancelTitle}
                        className="bg-[#b3b3b3] w-10 h-10 flex flex-col items-center justify-center rounded"
                      >
                        <Cancel />
                        <p className="text-[10px] text-[#ffffff]">Cancel</p>
                      </div>
                    </Button>
                    <Button>
                      <div
                        onClick={onClickSaveTitle}
                        className="bg-main w-10 h-10 flex flex-col items-center justify-center rounded"
                      >
                        <Save />
                        <p className="text-[10px] text-[#ffffff]">Save</p>
                      </div>
                    </Button>
                  </div>
                ) : (
                  <Button>
                    <div
                      onClick={onClickEditTitle}
                      className="bg-main w-[90px] h-10 flex flex-col items-center rounded"
                    >
                      <Edit />
                      <p className="h-2.5 text-white text-xs text-[#ffffff]">
                        Edit
                      </p>
                    </div>
                  </Button>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-[910px] h-[814px] overflow-y-auto pt-[30px] px-[30px] bg-[#ffffff] rounded-lg">
                {content.body}
              </div>
              <div className="pb-5 pl-5">
                {isEditableContent ? (
                  <div className="flex items-center justify-center gap-[10px]">
                    <Button>
                      <div
                        onClick={onClickCancelContent}
                        className="bg-[#b3b3b3] w-10 h-10 flex flex-col items-center justify-center rounded"
                      >
                        <Cancel />
                        <p className="text-[10px] text-[#ffffff]">Cancel</p>
                      </div>
                    </Button>
                    <Button>
                      <div
                        onClick={onClickSaveContent}
                        className="bg-main w-10 h-10 flex flex-col items-center justify-center rounded"
                      >
                        <Save />
                        <p className="text-[10px] text-[#ffffff]">Save</p>
                      </div>
                    </Button>
                  </div>
                ) : (
                  <Button>
                    <div
                      onClick={onClickEditContent}
                      className="bg-main w-[90px] h-10 flex flex-col items-center rounded"
                    >
                      <Edit />
                      <p className="h-2.5 text-white text-xs text-[#ffffff]">
                        Edit
                      </p>
                    </div>
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="h-[59px] flex items-center justify-between text-xs">
          <p>Copyright © 2021 Sample</p>
          <p>運営会社</p>
        </div>
      </div>
    </>
  );
};

export default Content;
