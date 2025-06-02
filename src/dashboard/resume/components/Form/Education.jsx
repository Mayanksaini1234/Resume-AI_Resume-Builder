import React, { useContext, useEffect, useState } from "react";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import globalAPI from "../../../../../service/globalAPI";
import { Loader } from "lucide-react";
const Education = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const formData = {
    universityName: "",
    startDate: "",
    endDate: "",
    degree: "",
    major: "",
    marksType:"",
    marksNumber:""
  };

  const [loader, setLoader] = useState(false);
  const id = useParams();
  const [educationList, setEducationList] = useState([formData]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    enableNext(false);

    const education = educationList.slice();
    education[index][name] = value;
    setEducationList(education);
  };

  useEffect(()=>{
resumeInfo && setEducationList(resumeInfo?.education)
  },[])

  useEffect(() => {
    setResume({
      ...resumeInfo,
      education: educationList
    });
    // console.log(educationList);
  }, [educationList]);
  const removeEducation = () => {
    setEducationList((educationList) => educationList.slice(0, -1));
  };
  const addEductaion = () => {
    setEducationList([...educationList, formData]);
  };

  const save = (e) => {
    setLoader(true);
    const data = {
      data: {
        education: educationList.map(({id,...rest})=>rest),
      },
    };
    globalAPI.UpdateResume(id?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Education details are updated!");
      },
      (err) => {
        console.log(err);
        setLoader(false);
        toast("Education details are not updated and there is an error!");
      }
    );
  };

  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded-sm bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold heading">Education</h2>
      <p className="text-semibold mt-1 mb-3">Tell us about your academic background.</p>

      <div>
        {educationList.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              
              <div>
                <label className="block text-sm font-medium">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={data?.degree || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  University Name
                </label>
                <input
                  type="text"
                  name="universityName"
                  value={data?.universityName || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Academic Score</label>
                <input
                  type="text"
                  name="marksNumber"
                  value={data?.marksNumber || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Percentage(%) / CGPA</label>
                <input
                  type="text"
                  name="marksType"
                  value={data?.marksType || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                    placeholder="% / CGPA"
                  className="w-full border rounded px-2 py-1"
                  
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={data?.startDate || ""}
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
                  value={data?.endDate || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <Button variant="outline" onClick={addEductaion}>
            + Add{" "}
          </Button>
          <Button variant="outline" onClick={removeEducation}>
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

export default Education;
