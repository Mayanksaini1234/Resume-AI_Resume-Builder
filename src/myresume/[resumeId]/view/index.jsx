import React, { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import Preview from "../../../../src/dashboard/resume/components/Preview";
import { FormPreviewContext } from "../../../context/FormPreviewContext";
import globalAPI from "../../../../service/globalAPI";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { RWebShare } from "react-web-share";
const View = () => {
  const [resumeInfo, setResume] = useState();
  const id = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    globalAPI.getResumeById(id.resumeId).then(
      (res) => {
        console.log(res.data.data);
        setResume(res.data.data);
      },

      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <FormPreviewContext.Provider value={{ resumeInfo, setResume }}>
      <div className="flex flex-col items-center gap-6 justify-center">
        <div
          className="bg-gradient-to-br from-purple-50 via-white to-rose-100 shadow-md rounded-xl p-8  max-w-4xl mx-auto mt-10 border border-gray-200 text-center"
          id="No-print-area"
        >
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-3">
            🎉 Congrats! Your Resume is Ready
          </h1>
          <p className="text-gray-600 text-base mb-8">
            You can now download your resume or share your unique resume URL
            with anyone.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md"
              onClick={() => {
                window.print();
              }}
              disabled={!resumeInfo}
            >
              Download
            </Button>
            <RWebShare
              data={{
                text: "Please open the URL to see the resume",
                url:
                  import.meta.env.VITE_BASE_URL +
                  "myresume/" +
                  id.resumeId +
                  "/view",
                title:
                  resumeInfo?.firstName +
                  " " +
                  resumeInfo?.lastName +
                  " resume",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md"
                disabled={!resumeInfo}
              >
                Share
              </Button>
            </RWebShare>
          </div>
          <hr className="border-t border-gray-300 " />
        </div>

        <div className="  max-w-4xl mx-auto  text-left " id="print-area">
          {!resumeInfo ? (
            <div className="flex justify-center items-center">
              <Loader2 className=" animate-spin size-20 text-gray-500"></Loader2>
            </div>
          ) : (
            <Preview />
          )}
        </div>
      </div>
    </FormPreviewContext.Provider>
  );
};

export default View;
