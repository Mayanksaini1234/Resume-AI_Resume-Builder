import { Link, Link2 } from "lucide-react";
import React from "react";

const ProjectPreview = ({ resumeInfo }) => {
  if (!resumeInfo?.project || resumeInfo.project.length === 0) return null;
  return (
    <div className="mt-2 font-arial w-full text-sm">
      <h2
        className="text-base font-semibold tracking-wide"
        style={{ color: resumeInfo?.themeColor || "#1f2937" }}
      >
        PROJECTS
      </h2>
      <div
        className="w-full h-[2.5px] rounded-full"
        style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
      />
      <div className=" flex flex-col justify-center gap-1 mt-1  ">
        {resumeInfo.project.map((data, index) => (
          <div key={index} className="">
            <div className="flex items-center gap-1">
              {data?.liveLink ? (
                <a
                  href={data.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline  hover:text-blue-600 transition-colors duration-200"
                >
                  <h3 className=" font-semibold underline ">
                    {data?.projectName}
                  </h3>
                </a>
              ) : (
                <h3 className=" font-semibold  ">{data?.projectName}</h3>
              )}

              <div className="flex items-center gap-3 ">
                {data?.keywords && (
                  <p className=" font-semibold ">{`(${data.keywords})`}</p>
                )}
                {data?.liveLink && (
                  <div>
                    <a
                      href={data.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="  hover:text-blue-600 transition-colors duration-200 "
                    >
                      <Link2 className="w-6 h-6 " />
                    </a>
                  </div>
                )}
              </div>
            </div>
            {data?.discription && (
              <div
                className=" text-sm formatted-content "
                dangerouslySetInnerHTML={{ __html: data?.discription }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPreview;
