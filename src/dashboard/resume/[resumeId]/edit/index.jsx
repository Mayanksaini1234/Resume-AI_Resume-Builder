import React, { useEffect, useState } from "react";
import Preview from "../../components/Preview";
import Formdata from "../../components/Formdata";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { dummy } from "../../../../data/dummy";
import globalAPI from "../../../../../service/globalAPI";
import { useParams } from "react-router-dom";
import {  Loader2 } from "lucide-react";
const EditResume = () => {
  const [resumeInfo, setResume] = useState();
  const Id = useParams();

  console.log(Id?.resumeId);
  useEffect(() => {
    // getResume();
    setResume(dummy)
  }, []);

  const getResume = () => {
    globalAPI.getResumeById(Id?.resumeId).then((res) => {
      console.log(res)
      setResume(res.data.data);
    });
  };

  return (
    <FormPreviewContext.Provider value={{ resumeInfo, setResume }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        <Formdata />
        <div className="h-full rounded-lg overflow-hidden">
          {!resumeInfo ? (
            <div
               className="h-full w-full rounded-xl animate-pulse bg-gradient-to-r from-indigo-200 via-violet-100 to-pink-50 flex justify-center items-center"
            ><Loader2 className=" animate-spin size-20 text-gray-500"></Loader2></div>
          ) : (
            <Preview />
          )}
        </div>
      </div>
    </FormPreviewContext.Provider>
  );
};

export default EditResume;
