import { Link2 } from "lucide-react";
import React from "react";

const ResponsibilityPreview = ({ resumeInfo }) => {
  if (!resumeInfo?.responsibility || resumeInfo.responsibility.length === 0)
    return null;
  return (
    <div className="mt-2 font-arial w-full">
    <h2
      className="text-base font-semibold tracking-wide"
      style={{ color: resumeInfo?.themeColor || "#1f2937" }}
    >
      POSITION OF RESPONSIBILITY

      </h2>
      <div
        className="w-full h-[2.5px]  rounded-full"
        style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
      />
      <div className="flex flex-col gap-1 mt-1 ">
        {resumeInfo.responsibility.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <h3 className="text-sm font-semibold text-black">
                  {data?.positionTitle}
                </h3>
                {data?.societyName && (
                  <p className="text-sm text-black">
                    <span>-- </span>
                    {data?.societyName}
                  </p>
                )}
              </div>
              <div className="text-sm ">
                {data?.startDate} - {data?.endDate ? data?.endDate : "present"}
              </div>
            </div>
            {data?.discription && (
              <div
                className="text-sm  formatted-content "
                dangerouslySetInnerHTML={{ __html: data?.discription }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsibilityPreview;
