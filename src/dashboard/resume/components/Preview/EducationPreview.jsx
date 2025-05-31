import React from "react";

const EducationPreview = ({ resumeInfo }) => {
  if (!resumeInfo?.education || resumeInfo.education.length === 0) return null;
  return (
    <div className="mt-2 font-arial w-full">
      <h2
        className="text-base font-semibold tracking-wide"
        style={{ color: resumeInfo?.themeColor || "#1f2937" }}
      >
        EDUCATION
      </h2>
      <div
        className="w-full h-[2.5px] rounded-full"
        style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
      />
      <div className=" flex flex-col justify-center mt-1">
        {resumeInfo?.education.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between items-center flex-wrap ">
              <div className="font-semibold text-sm">
                {data?.degree} {" | "} {data?.universityName}
              </div>
              <div className="text-sm ">
                {data?.marksNumber && data?.marksType && (
                  <span>
                    {data?.marksNumber} {data?.marksType} |{" "}
                  </span>
                )}
                <span>
                  {data?.startDate} - {!data?.endDate && "present"}{" "}
                  {data?.endDate}
                </span>
              </div>
            </div>

            {data?.description && (
              <p className="text-sm  text-blue-700  whitespace-pre-line leading-relaxed">
                {data?.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPreview;
