import React from "react";

const SkillsPreview = ({ resumeInfo }) => {
  if (!resumeInfo?.skills1 || resumeInfo.skills1.length === 0) return null;
  return (
    <div className="mt-2 font-arial w-full">
      <h2
        className="text-base font-semibold tracking-wide"
        style={{ color: resumeInfo?.themeColor || "#1f2937" }}
      >
        SKILLS
      </h2>

      <div
        className="w-full h-[2.5px]  rounded-full"
        style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
      />

      {resumeInfo.skills1 &&
        resumeInfo.skills1.map((data, index) => (
          <div key={index} className="flex flex-wrap items-center mt-1 text-base">
            {/* {console.log(data)} */}
           {data?.skillTitle && (<span className="font-semibold pr-1">{data.skillTitle} :</span>)} 
            {data.skillName?.map((data1, index1) => (
              <span key={index1} className=" font-semibold  ">
                {data1.name.trim()}
                {index1 !== data.skillName.length - 1 && " | "}
              </span>
            ))}
          </div>
        ))}

    </div>
  );
};

export default SkillsPreview;
