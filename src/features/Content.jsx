import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import Edit from "../components/icons/Edit";

const Content = () => {
  const API_URL = "http://localhost:3000/content";
  const { id } = useParams();

  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();

      setContent(data);
    };
    fetchContent();
  }, [id]);

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
                <Button>
                  <div className="bg-main w-[90px] h-10 flex flex-col items-center rounded">
                    <Edit />
                    <p className="h-2.5 text-white text-xs text-[#ffffff]">
                      Edit
                    </p>
                  </div>
                </Button>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-[910px] h-[814px] overflow-y-auto pt-[30px] px-[30px] bg-[#ffffff] rounded-lg">
                {content.body}
              </div>
              <div className="pb-5 pl-5">
                <Button>
                  <div className="bg-main w-[90px] h-10 flex flex-col items-center rounded">
                    <Edit />
                    <p className="h-2.5 text-white text-xs text-[#ffffff]">
                      Edit
                    </p>
                  </div>
                </Button>
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
