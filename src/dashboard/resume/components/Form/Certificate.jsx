import React, { useContext, useEffect, useState } from "react";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import globalAPI from "../../../../../service/globalAPI";
import RichTextEditor from "../CustomEditor";
import { Loader } from "lucide-react";
const Certificate = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const formData = {
    certificateName: "",
    issuedBy: "",
    startDate: "",
    endDate: "",
    link: "",
    discription: "",
  };

  const [loader, setLoader] = useState(false);
  const id = useParams();
  const [certificateList, setCertificateList] = useState([formData]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    enableNext(false);
    const updated = certificateList.slice();
    updated[index][name] = value;
    setCertificateList(updated);
  };

  const handleEditorChanges = (e, index, discription) => {
    const { value } = e.target;
    enableNext(false);
    const updated = [...certificateList];
    updated[index][discription] = value;
    setCertificateList(updated);
  };

  useEffect(() => {
    resumeInfo && setCertificateList(resumeInfo?.certificate);
  }, []);

  useEffect(() => {
    setResume({
      ...resumeInfo,
      certificate: certificateList,
    });
  }, [certificateList]);

  const remove = () => {
    setCertificateList(certificateList.slice(0, -1));
  };
  const add = () => {
    setCertificateList([...certificateList, formData]);
  };

  const save = (e) => {
    setLoader(true);
    const data = {
      data: {
        certificate: certificateList.map(({ id, ...rest }) => rest),
      },
    };
    globalAPI.UpdateResume(id?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Certificates are updated!");
      },
      (err) => {
        console.log(err);
        setLoader(false);
        toast("Certificates are not updated and there is an error!");
      }
    );
  };

  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded-sm bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold heading">Certifications</h2>
      <p className="text-semibold mt-1 mb-3">
        Add your Professional Certifications.
      </p>

      <div>
        {certificateList.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-sm mb-4 grid  gap-4"
            >
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Certificate Name
                </label>
                <input
                  type="text"
                  name="certificateName"
                  value={data?.certificateName || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Issued By
                </label>
                <input
                  type="text"
                  name="issuedBy"
                  value={data?.issuedBy || ""}
                  onChange={(event) => {
                    handleChange(index, event);
                  }}
                  className="w-full border rounded px-2 py-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium grid-cols-2">
                  Certificate Link
                </label>
                <input
                  type="text"
                  name="link"
                  value={data?.link || ""}
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

export default Certificate;
