import React, { useContext, useEffect, useState } from "react";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { Button } from "../../../../components/ui/button";
import { Loader } from "lucide-react";
import globalAPI from "../../../../../service/globalAPI";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
const Skills = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const skillTemplate = {
    skillTitle: "",
    skillName: [{ name: "" }],
  };

  const [skillList, setSkillList] = useState([skillTemplate]);
  const [loader, setLoader] = useState(false);
  const Id = useParams();

  useEffect(() => {
    if (resumeInfo.skills1) {
      setSkillList(resumeInfo?.skills1);
    }
  }, []);

  useEffect(() => {
    setResume({ ...resumeInfo, skills1: skillList });
  }, [skillList]);

  const addSkill = () => {
    setSkillList([...skillList, skillTemplate]);
  };

  const removeSkill = () => {
    if (skillList.length > 1) {
      setSkillList(skillList.slice(0, -1));
    }
  };

  const handeleTitleChange = (event, skillIndex) => {
    const value = event.target.value;
    enableNext(false);

    const updated = [...skillList];
    updated[skillIndex].skillTitle = value;
    setSkillList(updated);
  };

  const handleSkillName = (event, skillIndex, nameIndex) => {
    const { value } = event.target;
    enableNext(false);

    const updated = [...skillList];
    updated[skillIndex].skillName[nameIndex].name = value;
    setSkillList(updated);
  };

  const addSkillName = (index) => {
    const updated = [...skillList];
    updated[index].skillName.push({ name: "" });
    setSkillList(updated);
  };

  const removeSkillName = (index) => {
    const updated = [...skillList];
    updated[index].skillName.pop();
    setSkillList(updated);
  };

  const save = () => {
    setLoader(true);
    const cleanedSkills = skillList.map(({ id, skillName, ...rest }) => ({
      ...rest,
      skillName: skillName?.map(({ id, ...nameRest }) => nameRest) || [],
    }));
    
    const data = {
      data: {
   skills1: cleanedSkills
    }
  }

    globalAPI.UpdateResume(Id?.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Skills are updated!");
      },
      (err) => {
        console.log(err.response.data.error);
        setLoader(false);
        enableNext(true);
        toast("Skills are not updated , there is an error!");
      }
    );
  };
  return (
    <div
      className="mb-6 border-t-4 shadow-md p-6 rounded-lg bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <p className="font-medium text-gray-700 mb-4">
        Showcase your expertise by adding relevant skills.
      </p>

      <div className="flex flex-col gap-6">
        {skillList.map((skill, skillIndex) => (
          <div key={skillIndex} className="border-b pb-4">
            {/* Skill Type Row */}
            <div className="flex items-center gap-4 mb-3">
              <label className="text-lg font-semibold text-gray-700">
                Skill Type:
              </label>
              <input
                type="text"
                required
                name="skillTitle"
                placeholder="e.g., Language or Tool"
                onChange={(e) => handeleTitleChange(e, skillIndex)}
                value={skill?.skillTitle}
                className="flex-1 bg-yellow-100 text-yellow-800  border border-yellow-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Skill Names Below */}
            <div className="flex flex-col gap-2">
              {  skill.skillName &&  skill.skillName.map((nameData, nameIndex) => (
                <input
                  key={nameIndex}
                  type="text"
                  name="name"
                  placeholder="e.g., C++ or Java"
                  value={nameData?.name}
                  onChange={(e) => handleSkillName(e, skillIndex, nameIndex)}
                  className="w-full border border-gray-300 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-3">
              <Button
                variant="outline"
                onClick={() => addSkillName(skillIndex)}
              >
                + Add
              </Button>
              <Button
                variant="outline"
                onClick={() => removeSkillName(skillIndex)}
              >
                - Remove
              </Button>
            </div>
          </div>
        ))}
        <div className="flex  justify-between">
          <div className="flex gap-3">
            <Button variant="outline" onClick={addSkill}>
              + Add Section
            </Button>
            <Button variant="outline" onClick={removeSkill}>
              - Remove Section
            </Button>
          </div>
          <Button type="submit" onClick={save} disabled={loader}>
            {" "}
            {loader ? <Loader className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
