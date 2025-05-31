import React from "react";
const PersonalDetailPreview = ({ resumeInfo }) => {
  return (
    <div className="flex justify-center  items-center font-arial">
      <div className="w-full">
        {/* Name & Job Title */}
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold tracking-wide"
            style={{ color: resumeInfo?.themeColor || "#1f2937" }}
          >
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h1>
          <h2 className="text-xl  mt-1 font-bold">{resumeInfo?.jobTitle}</h2>

          <div className="flex  justify-center  items-center  text-base font-semibold mt-1 ">
            <span style={{ color: resumeInfo?.themeColor || "#1f2937" }}>
              {resumeInfo.portfolioUrl && (
                <span>
                  <a
                    href={resumeInfo?.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" underline hover: hover:text-blue-600 transition-colors duration-200"
                  >
                    Portfolio
                  </a>{" "}
                  {" | "}
                </span>
              )}
              {resumeInfo?.email} | {resumeInfo?.phone}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center font-semibold mt-1 text-base ">
          {resumeInfo?.linkName1 && resumeInfo?.linkUrl1 && (
            <a
              href={resumeInfo.linkUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className=" underline  hover:text-blue-600 transition-colors duration-200"
            >
              {resumeInfo.linkName1}
            </a>
          )}

          {resumeInfo?.linkName2 && resumeInfo?.linkUrl2 && (
            <a
              href={resumeInfo.linkUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className=" underline  hover:text-blue-600 transition-colors duration-200"
            >
              {resumeInfo.linkName2}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailPreview;



// text 4xl xl md base sm 
// extrabold bold semibold 