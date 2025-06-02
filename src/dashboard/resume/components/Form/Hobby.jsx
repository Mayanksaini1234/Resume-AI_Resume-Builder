import React, { useContext, useEffect, useState } from "react";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import globalAPI from "../../../../../service/globalAPI";
import RichTextEditor from "../CustomEditor";
import { Loader } from "lucide-react";
const Hobby = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const formData = {
    hobbyTitle: "",
    description: " ",
  };

  const [loader, setLoader] = useState(false);
  const id = useParams();
  const [hobbyList, setHobbyList] = useState([formData]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    enableNext(false);

    const updated = hobbyList.slice();
    updated[index][name] = value;
    setHobbyList(updated);
  };

  const handleEditorChanges = (e, index, description) => {
    const { value } = e.target;
    enableNext(false);

    const updated = [...hobbyList];
    updated[index][description] = value;
    setHobbyList(updated);
  };

  useEffect(() => {
    resumeInfo && setHobbyList(resumeInfo?.Hobbies);
  }, []);

  useEffect(() => {
    setResume({
      ...resumeInfo,
      Hobbies: hobbyList,
    });
  }, [hobbyList]);

  const remove = () => {
    setHobbyList(hobbyList.slice(0, -1));
  };
  const add = () => {
    setHobbyList([...hobbyList, formData]);
  };

  const save = (e) => {
    setLoader(true);
    const data = {
      data: {
        Hobbies: hobbyList.map(({ id, ...rest }) => rest),
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
      <h2 className="text-2xl font-bold heading">Hobbies</h2>
      <p className="text-semibold mt-1 mb-3">Add your Hobbies.</p>

      <div>
        {hobbyList.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4 grid  gap-4"
            >
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Hobby Title
                </label>
                <input
                  type="text"
                  name="hobbyTitle"
                  value={data?.hobbyTitle || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Tell something about it !{" "}
                </label>

                <RichTextEditor
                  defaultValue={data?.description}
                  RichTextEditorChanges={(e) => {
                    handleEditorChanges(e, index, "description");
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

export default Hobby;
