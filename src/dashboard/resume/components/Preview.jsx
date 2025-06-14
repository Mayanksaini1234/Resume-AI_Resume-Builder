import React, { useContext } from "react";
import { FormPreviewContext } from "../../../context/FormPreviewContext";
import PersonaldeatlPreview from "./Preview/PersonaldeatlPreview";
import ExperiencePreview from "./Preview/ExperiencePreview";
import EducationPreview from "./Preview/EducationPreview";
import SkillsPreview from "./Preview/SkillsPreview";
import SummaryPreview from "./Preview/SummaryPreview";
import ProjectsPreview from "./Preview/ProjectsPreview";
import CertificatePreview from "./Preview/CertificatePreview";
import ResponsibilityPreview from "./Preview/ResponsibilityPreview";
import HobbyPreview from "./Preview/HobbyPreview";

const Preview = () => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);

  return (
    <div
      className="shadow-lg h-full p-8 border-t-[20px] "
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonaldeatlPreview resumeInfo={resumeInfo} />
      <SummaryPreview resumeInfo={resumeInfo} />
      <SkillsPreview resumeInfo={resumeInfo} />
      <ProjectsPreview resumeInfo={resumeInfo} />
      <ExperiencePreview resumeInfo={resumeInfo} />
      <EducationPreview resumeInfo={resumeInfo} />
      <CertificatePreview resumeInfo={resumeInfo} />
      <ResponsibilityPreview  resumeInfo={resumeInfo}/>
      <HobbyPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default Preview;
