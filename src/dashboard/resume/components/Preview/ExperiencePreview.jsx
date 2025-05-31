import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  if (!resumeInfo?.experience || resumeInfo.experience.length === 0)
    return null;
  return (
    <div className="mt-2 font-arial w-full">
    <h2
      className="text-base font-semibold tracking-wide"
      style={{ color: resumeInfo?.themeColor || "#1f2937" }}
    >
      PROFESSIONAL EXPERIENCE

      </h2>
      <div
        className="w-full h-[2.5px] rounded-full"
        style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
      />
      <div className=" flex flex-col justify-center gap-1 mt-1 ">
        {resumeInfo.experience.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between items-center flex-wrap">
              <div
                className="font-semibold text-sm"
                style={{ color: resumeInfo?.themeColor || "#1f2937" }}
              >
                {data?.title}
              </div>
              <div className="text-sm ">
                {data?.startDate} - {data?.endDate ? data?.endDate : "present"}
              </div>
            </div>

            <div className="text-sm ">
             <span>{data?.companyName}</span> 
              <span>{data?.city && (","+data?.city)}</span>
              <span>{data?.state && (","+data?.state)}</span>
            </div>
            {data?.workSummery && (
              <div
                className="text-sm  formatted-content "
                dangerouslySetInnerHTML={{ __html: data?.workSummery }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePreview;
