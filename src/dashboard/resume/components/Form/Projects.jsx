import React, { useContext, useEffect, useState } from "react";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import globalAPI from "../../../../../service/globalAPI";
import RichTextEditor from "../CustomEditor";
import { Loader } from "lucide-react";
const Projects = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const formData = {
    projectName: "",
    liveLink: "",
    keywords: "",
    discription: "",
  };

  const [loader, setLoader] = useState(false);
  const id = useParams();
  const [projectList, setProjectList] = useState([formData]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    enableNext(false);

    const updated = projectList.slice();
    updated[index][name] = value;
    setProjectList(updated);
  };

  const handleEditorChanges = (e, index , discription) => {
    const { value } = e.target;
    enableNext(false);

    const updated = [...projectList];
    updated[index][discription] = value;
    setProjectList(updated);
  };

  useEffect(() => {
    resumeInfo && setProjectList(resumeInfo.project);
  }, []);

  useEffect(() => {
    setResume({
      ...resumeInfo,
      project: projectList,
    });
  }, [projectList]);

  const remove = () => {
    setProjectList(projectList.slice(0, -1));
  };
  const add = () => {
    setProjectList([...projectList, formData]);
  };

  const save = (e) => {
    setLoader(true);
    const data ={
      data:{
        project:projectList.map(({id,...rest})=>rest)
      }
    }
    globalAPI.UpdateResume(id?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Projects details are updated!");
      },
      (err) => {
        console.log(err);
        setLoader(false);
        toast("Projects details are not updated and there is an error!");
      }
    );
  };

  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded-sm bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold heading">Projects</h2>
      <p className="text-semibold mt-1 mb-3">
        Tell us about your recent Projects.
      </p>

      <div>
        {projectList.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4 grid  gap-4"
            >
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={data?.projectName || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Live Link
                </label>
                <input
                  type="text"
                  name="liveLink"
                  value={data?.liveLink || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Imp KeyWords
                </label>
                <input
                  type="text"
                  name="keywords"
                  value={data?.keywords || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  placeholder="(React,TailwindCSS,Strapi)"
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Discription
                </label>

                <RichTextEditor
                  defaultValue={data?.discription}
                  RichTextEditorChanges={(e) => {
                    handleEditorChanges(e, index, "discription");
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <Button variant="outline" onClick={add}>
            + Add{" "}
          </Button>
          <Button variant="outline" onClick={remove}>
            - Remove{" "}
          </Button>
        </div>
        <Button onClick={save} disabled={loader}>
          {loader ? <Loader className="animate-spin" /> : "Save"}
        </Button>{" "}
      </div>
    </div>
  );
};

export default Projects;
