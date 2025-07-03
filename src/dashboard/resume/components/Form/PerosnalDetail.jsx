import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import globalAPI from "../../../../../service/globalAPI";
import { Loader } from "lucide-react";

const PerosnalDetail = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const [formData, setFormData] = useState();
  const [loader, setLoader] = useState(false);

  const Params = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    enableNext(false);
    setFormData({
      ...formData,
      [name]: value,
    });
    setResume({
      ...resumeInfo,
      [name]: value,
    });
  };

  const save = (e) => {
    e.preventDefault();
    setLoader(true);
    // console.log(formData)
    const data = {
      data: formData,
    };
    globalAPI.UpdateResume(Params?.resumeId, data).then(
      (res) => {
        enableNext(true);
        console.log(res);
        setLoader(false);
        toast("Personal Details Updated!");
      },
      (err) => {
        setLoader(false);
        console.log(err);
      }
    );
  };
  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold text-gray-800">Personal Detail</h2>
      <p className="text-sm text-gray-600 mt-1 mb-3">
        Start with your essential personal information.
      </p>
  
      <form onSubmit={save}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.firstName}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.lastName}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.jobTitle}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.phone}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              required
              onChange={handleChange}
              defaultValue={resumeInfo?.email}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Portfolio Link
            </label>
            <input
              type="text"
              name="portfolioUrl"
              onChange={handleChange}
              defaultValue={resumeInfo?.portfolioUrl}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Name 1
            </label>
            <input
              type="text"
              name="linkName1"
              onChange={handleChange}
              defaultValue={resumeInfo?.linkName1}
              placeholder="LinkedIn or GitHub."
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link URL
            </label>
            <input
              type="text"
              name="linkUrl1"
              onChange={handleChange}
              defaultValue={resumeInfo?.linkUrl1}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Name 2
            </label>
            <input
              type="text"
              name="linkName2"
              onChange={handleChange}
              defaultValue={resumeInfo?.linkName2}
              placeholder="LinkedIn or GitHub."
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Link URL
            </label>
            <input
              type="text"
              name="linkUrl2"
              onChange={handleChange}
              defaultValue={resumeInfo?.linkUrl2}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Button type="submit" disabled={loader}>
            {loader ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
  
};

export default PerosnalDetail;
