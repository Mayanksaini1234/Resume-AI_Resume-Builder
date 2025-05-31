import { Link, Link2 } from "lucide-react";
import React from "react";

const CertificatePreview = ({ resumeInfo }) => {
  if (!resumeInfo?.certificate || resumeInfo.certificate.length === 0)
    return null;
  return (
    <div className="mt-2 font-arial w-full">
    <h2
      className="text-base font-semibold tracking-wide"
      style={{ color: resumeInfo?.themeColor || "#1f2937" }}
    >
        CERTIFICATIONS

      </h2>
      <div
        className="w-full h-[2.5px] rounded-full"
        style={{ backgroundColor: resumeInfo?.themeColor || "#1f2937" }}
      />
      <div className="flex flex-col  mt-1">
        {resumeInfo.certificate.map((data, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <h3 className="text-sm font-semibold text-black">
                  {data?.certificateName}
                </h3>
                {data?.issuedBy && (
                  <p className="text-sm text-black">
                    <span>Issued by </span>
                    {data.issuedBy}
                  </p>
                )}

                {data?.link && (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" ml-2 hover: transition-colors duration-200"
                  >
                    <Link2 />
                  </a>
                )}
              </div>
              <div className="text-sm ">
                {data?.startDate} - {data?.endDate ? data?.endDate : "present"}
              </div>
            </div>
            {data?.discription && (
              <div
                className="text-sm formatted-content "
                dangerouslySetInnerHTML={{ __html: data?.discription }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatePreview;
