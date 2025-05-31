import React, { useContext, useEffect, useState } from "react";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import globalAPI from "../../../../../service/globalAPI";
import RichTextEditor from "../CustomEditor";
import { Loader } from "lucide-react";
const Responsibility = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const formData = {
    positionTitle: "",
    societyName: "",
    startDate: "",
    endDate: "",
    discription: "",
  };

  const [loader, setLoader] = useState(false);
  const id = useParams();
  const [responsibilityList, setResponsibilityList] = useState([formData]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updated = responsibilityList.slice();
    updated[index][name] = value;
    setResponsibilityList(updated);
  };

  const handleEditorChanges = (e, index, discription) => {
    const { value } = e.target;
    const updated = [...responsibilityList];
    updated[index][discription] = value;
    setResponsibilityList(updated);
  };

  useEffect(() => {
    resumeInfo && setResponsibilityList(resumeInfo?.responsibility);
  }, []);

  useEffect(() => {
    setResume({
      ...resumeInfo,
      responsibility: responsibilityList,
    });
  }, [responsibilityList]);

  const remove = () => {
    setResponsibilityList(responsibilityList.slice(0, -1));
  };
  const add = () => {
    setResponsibilityList([...responsibilityList, formData]);
  };

  const save = (e) => {
    enableNext(false);
    setLoader(true);
    const data = {
      data: {
        responsibility: responsibilityList.map(({ id, ...rest }) => rest),
      },
    };
    globalAPI.UpdateResume(id?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Data is updated!");
      },
      (err) => {
        console.log(err);
        setLoader(false);
        toast("Data is not updated and there is an error!");
      }
    );
  };

  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded-sm bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold heading">Position Of Responsibility</h2>
      <p className="text-semibold mt-1 mb-3">
        Add your Position Of Responsibility.
      </p>

      <div>
        {responsibilityList.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4 grid  gap-4"
            >
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Position Title
                </label>
                <input
                  type="text"
                  name="positionTitle"
                  value={data?.positionTitle || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Society Name
                </label>
                <input
                  type="text"
                  required
                  name="societyName"
                  value={data?.societyName || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={data?.startDate || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  required
                  placeholder="(React,TailwindCSS,Strapi)"
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={data?.endDate || ""}
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

export default Responsibility;
