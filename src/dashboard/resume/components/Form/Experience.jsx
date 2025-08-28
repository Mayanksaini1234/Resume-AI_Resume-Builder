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
  // access the default values in form inputs 

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    enableNext(false);

    const experienceList = experience.slice();
    // const experienceList = [...experience];
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
      className="mb-6 border-t-4 shadow-md p-6 rounded-md bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Experience</h2>
      <p className="text-sm text-gray-600 mb-4">
        Add your professional experience to your resume.
      </p>
  
      {experience.map((data, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-md p-4 shadow-sm mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position Title
            </label>
            <input
              type="text"
              name="title"
              value={data?.title}
              onChange={(event) => handleChange(index, event)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={data?.companyName}
              onChange={(event) => handleChange(index, event)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={data?.city}
              onChange={(event) => handleChange(index, event)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              value={data?.state}
              onChange={(event) => handleChange(index, event)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={data?.startDate}
              onChange={(event) => handleChange(index, event)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={data?.endDate}
              onChange={(event) => handleChange(index, event)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="sm:col-span-2">
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
      ))}
  
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap mt-4">
  <div className="flex flex-wrap gap-3">
    <Button variant="outline" onClick={addExperience} className="w-full sm:w-auto">
      + Add More Experience
    </Button>
    <Button variant="outline" onClick={removeExperience} className="w-full sm:w-auto">
      - Remove Experience
    </Button>
  </div>
  <Button
    onClick={save}
    disabled={loader}
    className="w-full sm:w-auto"
  >
    {loader ? <Loader className="animate-spin" /> : "Save"}
  </Button>
</div>
    </div>
  );
  };

export default Experience;
