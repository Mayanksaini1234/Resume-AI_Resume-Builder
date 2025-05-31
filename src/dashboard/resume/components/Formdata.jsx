
import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import PerosnalDetail from "./Form/PerosnalDetail";
import Summary from "./Form/summary";
import Experience from "./Form/Experience";
import Education from "./Form/Education";
import Skills from "./Form/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import { FormPreviewContext } from "../../../context/FormPreviewContext";
import ThemeColor from "./ThemeColor";
import ProjectPreview from "./Preview/ProjectsPreview";
import Projects from "./Form/Projects";
import Certificate from "./Form/Certificate";
import Responsibility from "./Form/Responsibility";
import Hobby from "./Form/Hobby";
const Formdata = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const {resumeInfo , setResume} = useContext(FormPreviewContext)
  const id = useParams();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center gap-4">
          <Link to={"/dashboard"}>
            <Button>
              <Home size={42} />
            </Button>
          </Link>

          <ThemeColor/>
        </div>

        <div className="flex justify-between items-center gap-3">
          {activeIndex > 1 && (
            <Button
              className="flex items-center gap-2"
              onClick={() => {
                setActiveIndex(activeIndex - 1);
              }}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          )}
          
              <Button
                disabled={!enableNext || !resumeInfo}
                className="flex items-center gap-2"
                onClick={() => {
                  setActiveIndex(activeIndex + 1);
                }}
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            
        </div>
      </div>
      {activeIndex == 1 ? (
        <PerosnalDetail
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeIndex == 2 ? (
        <Summary
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeIndex == 3 ? (
        <Skills
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeIndex == 4 ? (
        <Education
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeIndex == 5 ? (
        <Experience
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) : activeIndex == 6 ? (
        <Projects
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) 
      : activeIndex == 7 ? (
        <Certificate
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) 
      : activeIndex == 8 ? (
        <Responsibility
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) 
      : activeIndex == 9 ? (
        <Hobby
          enableNext={(v) => {
            setEnableNext(v);
          }}
        />
      ) :  (
        <Navigate to={"/myresume/"+id.resumeId+"/view"}/ >
      )
    }
    </div>
  );
};

export default Formdata;
