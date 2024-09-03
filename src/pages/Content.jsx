import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentStore } from "../store/content";

import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Textarea from "../components/common/Textarea";
import Footer from "../components/common/Footer";
import Edit from "../components/icons/Edit";
import Cancel from "../components/icons/Cancel";
import Save from "../components/icons/Save";

const Content = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isEditableTitle, setIsEditableTitle] = useState(false);
  const [isEditableContent, setIsEditableContent] = useState(false);
  const { updateContent } = useContentStore();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL || "http://localhost:3000"
          }/content/${id}`
        );
        const data = await res.json();

        setTitle(data.title);
        setBody(data.body);
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
      updateContent(id, title, body);
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
  const onClickSaveContent = async () => {
    try {
      updateContent(id, title, body);
      setIsEditableContent(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="h-full w-full px-10 pt-[30px]">
        <div className="flex h-full w-full p-[30px] bg-bg-light rounded-2xl">
          <div className="w-full">
            <div className="flex items-center justify-start">
              {isEditableTitle ? (
                <>
                  <Input
                    type={"text"}
                    name={title}
                    value={title}
                    updateInput={(e) => setTitle(e.target.value)}
                    className={
                      "w-[910px] h-10 px-[30px] mb-5 font-bold text-2xl text-[#333333] leading-10 tracking-normal border border-solid border-[#4cb3f8] rounded-lg focus:border-[#347CAB]"
                    }
                  />
                  <div className="pl-5 pb-5">
                    <div className="flex items-center justify-center gap-[10px]">
                      <Button
                        onClick={onClickCancelTitle}
                        className={
                          "bg-[#b3b3b3] w-10 h-10 flex flex-col items-center justify-center rounded"
                        }
                        label={"Cancel"}
                        labelClassName={
                          "text-[10px] text-[#ffffff] font-bold leading-[10px]"
                        }
                      >
                        <Cancel />
                      </Button>
                      <Button
                        onClick={onClickSaveTitle}
                        className={
                          "bg-main w-10 h-10 flex flex-col items-center justify-center rounded"
                        }
                        label={"Save"}
                        labelClassName={
                          "text-[10px] text-[#ffffff] font-bold leading-[10px]"
                        }
                      >
                        <Save />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[910px] h-10 px-[30px] mb-5 font-bold text-2xl text-[#333333] leading-10 tracking-normal">
                    {title}
                  </div>
                  <div className="pl-5 pb-5">
                    <Button
                      onClick={onClickEditTitle}
                      className={
                        "bg-main w-[90px] h-10 flex flex-col items-center rounded"
                      }
                      label={"Edit"}
                      labelClassName={
                        "text-[10px] text-[#ffffff] font-bold leading-[10px]"
                      }
                    >
                      <Edit />
                    </Button>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-start">
              {isEditableContent ? (
                <>
                  <Textarea
                    name={"content"}
                    value={body}
                    updateInput={(e) => setBody(e.target.value)}
                    className={
                      "w-[910px] h-[814px] overflow-y-auto pt-[30px] px-[30px] bg-[#ffffff] text-[#333333] tracking-normal border border-solid border-[#4cb3f8] rounded-lg focus:border-[#347CAB] whitespace-break-spaces"
                    }
                  />
                  <div className="pb-5 pl-5">
                    <div className="flex items-center justify-center gap-[10px]">
                      <Button
                        onClick={onClickCancelContent}
                        className={
                          "bg-[#b3b3b3] w-10 h-10 flex flex-col items-center justify-center rounded"
                        }
                        label={"Cancel"}
                        labelClassName={
                          "text-[10px] text-[#ffffff] font-bold leading-[10px]"
                        }
                      >
                        <Cancel />
                      </Button>
                      <Button
                        onClick={onClickSaveContent}
                        className={
                          "bg-main w-10 h-10 flex flex-col items-center justify-center rounded"
                        }
                        label={"Save"}
                        labelClassName={
                          "text-[10px] text-[#ffffff] font-bold leading-[10px]"
                        }
                      >
                        <Save />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[910px] h-[814px] overflow-y-auto pt-[30px] px-[30px] bg-[#ffffff] rounded-lg whitespace-break-spaces">
                    {body}
                  </div>
                  <div className="pb-5 pl-5">
                    <Button
                      onClick={onClickEditContent}
                      className={
                        "bg-main w-[90px] h-10 flex flex-col items-center rounded"
                      }
                      label={"Edit"}
                      labelClassName={
                        "text-[10px] text-[#ffffff] font-bold leading-[10px]"
                      }
                    >
                      <Edit />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <Footer
          copyright={"Copyright © 2021 Sample"}
          companyName={"運営会社"}
        />
      </div>
    </>
  );
};

export default Content;
