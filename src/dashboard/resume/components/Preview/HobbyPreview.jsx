import { Link, Link2 } from "lucide-react";
import React from "react";

const HobbyPreview = ({ resumeInfo }) => {
  if (!resumeInfo?.Hobbies || resumeInfo.Hobbies.length === 0) return null;
  return (
    <div className="mt-2 font-arial w-full">
      <h2
        className="text-base font-semibold tracking-wide"
        style={{ color: resumeInfo?.themeColor || "#1f2937" }}
      >
        HOBBIES
      </h2>
      <div
        className="w-full h-[2.5px] rounded-full"
        style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
      />
      <div className="flex flex-col">
        {resumeInfo?.Hobbies?.map((data, index) => (
          <div key={index}>
            <h4 className="text-sm font-semibold text-black mt-1">
              {data?.hobbyTitle}
            </h4>
            {data?.description && (
              <div
                className="text-sm   formatted-content "
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbyPreview;
