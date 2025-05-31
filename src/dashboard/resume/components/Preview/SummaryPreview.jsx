import React from "react";

const SummaryPreview = ({ resumeInfo }) => {
  if (!resumeInfo?.summery) return null;

  return (
    <div className="mt-1   font-arial text-justify ">
      <div>
        <h2 className=" text-sm ">{resumeInfo.summery}</h2>
      </div>
    </div>
  );
};

export default SummaryPreview;
