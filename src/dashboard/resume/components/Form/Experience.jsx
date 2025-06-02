import React, { useContext, useEffect, useState } from "react";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import RichTextEditor from "../RichTextEditor";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import globalAPI from "../../../../../service/globalAPI";
import { Loader } from "lucide-react";
const Experience = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);

  const formData = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    workSummery: "",
  };

  const [experience, setExpereince] = useState([formData]);
  const [loader, setLoader] = useState(false);
  const id = useParams();

  useEffect(()=>{
    resumeInfo && setExpereince(resumeInfo?.experience) 
  },[])

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    enableNext(false);

    const experienceList = experience.slice();
    experienceList[index][name] = value;
    setExpereince(experienceList);
  };

  const handleRichTextEditor = (event, index, name) => {
    const experienceList = experience.slice();
    enableNext(false);

    const { value } = event.target;
    experienceList[index][name] = value;
    setExpereince(experienceList);
  };

  useEffect(() => {
    setResume({
      ...resumeInfo,
      experience: experience
    });
    // console.log(experience)
  }, [experience]);

  const addExperience = () => {
    setExpereince([...experience, formData]);
  };
  
  const removeExperience = () => {
    setExpereince((experience) => experience.slice(0, -1));
  };
  
  const save = (e) => {
    setLoader(true);
    const data = {
      data: {
        experience:experience.map(({id,...rest})=>rest),
        //this is beacuse , id can be ignored and rest data will be saved 
      },
    };
    globalAPI.UpdateResume(id?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Experience is updated!");
      },
      (err) => {
        console.log(err);
        setLoader(false);
        toast("Experience is not updated and there is an error!");
      }
    );
  };

  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded-sm bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold heading">Experience</h2>
      <p className="text-semibold mt-1 mb-3">Add your professional experience to your resume.</p>

      {experience.map((data, index) => {
        return (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium">
                Position Title
              </label>
              <input
                type="text"
                name="title"
                value={data?.title}
                onChange={(event) => {
                  handleChange(index, event);
                }}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={data?.companyName}
                onChange={(event) => {
                  handleChange(index, event);
                }}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={data?.city}
                onChange={(event) => {
                  handleChange(index, event);
                }}
                className="w-full border rounded px-2 py-1"
               
              />
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                value={data?.state}
                onChange={(event) => {
                  handleChange(index, event);
                }}
                className="w-full border rounded px-2 py-1"
               
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={data?.startDate}
                onChange={(event) => {
                  handleChange(index, event);
                }}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={data?.endDate}
                onChange={(event) => {
                  handleChange(index, event);
                }}
                className="w-full border rounded px-2 py-1"
                
              />
            </div>

            <div className="col-span-2">
              <RichTextEditor
                index={index}
                defaultValue={data?.workSummery}
                className="w-full"
                RichTextEditorChanges={(event) => {
                  handleRichTextEditor(event, index, "workSummery");
                }}
              />
            </div>
          </div>
        );
      })}
      <div className="flex justify-between items-center mt-2">
        <div className="flex justify-between items-center gap-2">
          <Button variant="outline" onClick={addExperience}>
            + Add More Experience
          </Button>
          <Button variant="outline" onClick={removeExperience}>
            - Remove Experience
          </Button>
        </div>
        <Button onClick={save} disabled={loader}>
          {loader ? <Loader className="animate-spin" /> : "Save"}
        </Button>{" "}
      </div>
    </div>
  );
};

export default Experience;
