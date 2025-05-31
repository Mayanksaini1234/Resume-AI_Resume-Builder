
import React, { useContext, useState } from "react";
import { Button } from "../../../../components/ui/button";
import globalAPI from "../../../../../service/globalAPI";
import { FormPreviewContext } from "../../../../context/FormPreviewContext";
import { useParams } from "react-router-dom";
import { Brain, Loader, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Summary = ({ enableNext }) => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const [formData, SetData] = useState();
  const [loader, setLoader] = useState(false);
  const Params = useParams();
  const [aiSummary, setAISummary] = useState();
  const ai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);

  const GenerateSummeryFromAI = async () => {
    try {
      setLoader(true);
      enableNext(false)
      const PROMPT = `Job Title: ${resumeInfo.jobTitle} , Depends on job title give me list of summary for 3 experience levels (Experienced, Mid Level, Fresher) in 2-3 lines. Respond in array JSON format but with fields: experience_level and summary`;

      console.log("Prompt:", PROMPT);

      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(PROMPT);
      const textResponse = await result.response.text();
      const cleanedText = textResponse.replace(/```json|```/g, "").trim();
      const parsedResponse = JSON.parse(cleanedText);
      console.log(cleanedText);
      setAISummary(parsedResponse);
      toast("AI Summary Generated!");
    } catch (err) {
      console.error("Error parsing AI response:", err);
      toast.error("Failed to generate summary");
    } finally {
      setLoader(false);
      enableNext(true)
    }
  };

  const updateSummmary = (text) => {
    setResume({
      ...resumeInfo,
      summery: text,
    });
    SetData({
      ...formData,
      summery: text,
    });
  };

  const changeHandler = (e) => {
    const { value } = e.target;
    enableNext(false);
    SetData({
      ...formData,
      summery: value,
    });
    setResume({
      ...resumeInfo,
      summery: value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    enableNext(false)
    const data = {
      data: formData,
    };
    globalAPI.UpdateResume(Params.resumeId, data).then(
      (res) => {
        console.log(res);
        enableNext(true);
        setLoader(false);
        toast("Summary is Updated!");
      },
      (err) => {
        console.log(err);
        setLoader(false);
      }
    );
  };

  return (
    <div
      className="mb-6 border-t-4 shadow-md p-4 rounded-sm bg-white"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <h2 className="text-2xl font-bold">Summary</h2>
      <p className="text-semibold mt-1 mb-3">Add Summary for your Resume</p>

      <form onSubmit={SubmitHandler} className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end">
            <Button
              type="button"
              variant="outline"
              className="w-3xs"
              onClick={GenerateSummeryFromAI}
            >
              <Brain className="w-4 h-4" />
              Generate From AI
            </Button>
          </div>
          <textarea
            name="summery"
            onChange={changeHandler}
            value={resumeInfo?.summery || " "}
            rows="6"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex items-center justify-end">
            <Button type="submit" disabled={loader}>
              {loader ? <Loader className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </form>
      <div className="space-y-4 mt-4">
        {aiSummary && (
          <h2 className="text-2xl font-bold">AI Generated Suggestions</h2>
        )}
        {aiSummary &&
          aiSummary.map((data, index) => (
            <div key={index} className="p-4 border rounded-md shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                {data.experience_level}
              </h3>
              <p
                className="text-sm text-gray-700 whitespace-pre-line"
                onClick={() => {
                  updateSummmary(data.summary);
                }}
              >
                {data.summary}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Summary;
