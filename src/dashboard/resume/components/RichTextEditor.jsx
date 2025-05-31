import { useContext, useEffect, useState } from "react";
import Editor, {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnUnderline,
  BtnUndo,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { Button } from "../../../components/ui/button";
import { Brain, Loader, Loader2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "sonner";
import { FormPreviewContext } from "../../../context/FormPreviewContext";

export default function CustomEditor({
  RichTextEditorChanges,
  index,
  defaultValue,
}) {
  const [value, setValue] = useState(defaultValue);
  
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  
  const [loader, setLoader] = useState(false);
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const ai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
  const GenerateSummeryFromAI = async () => {
    try {
      setLoader(true);
      if (!resumeInfo.experience[index].title) {
        toast("Please enter the position title before generating from AI !");
        return;
      }
      const PROMPT = `Job Title: ${resumeInfo.experience[index].title} ,Based on this position title, give me 5-7 concise and professional bullet points suitable for a resume. Return the result in HTML bullet tags <ul><li>...</li></ul>. Do not include any headings, descriptions, or explanation text—just the HTML list and make sure Do NOT return any JSON, objects, keys, or explanations. Just the raw HTML list.`;
      console.log("Prompt:", PROMPT);
      const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(PROMPT);
      const textResponse = await result.response.text();
      const finalResponse = textResponse
        .replace("```html", "")
        .replace("```", "");
      console.log(textResponse);
      toast("AI suggestion Generated!");
      setValue(finalResponse);
    } catch (err) {
      console.error("Error parsing AI response:", err);
      toast.error("Failed to generate summary");
      setLoader(false);
    } finally {
      setLoader(false);
    }
  };

  function onChange(e) {
    setValue(e.target.value);
    RichTextEditorChanges(e);
  }

  return (
    <Editor value={value} onChange={onChange} key={index}>
      <div className="flex items-center justify-between border-b p-2 mb-3">
        <h3 className="text-md font-semibold">Summary</h3>
        <Button
          variant="outline"
          onClick={GenerateSummeryFromAI}
          disabled={loader}
        >
          {loader ? (
            <Loader2 className="animate-spin" />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Brain className="w-4 h-4" />
              Generate From AI
            </div>
          )}
        </Button>
      </div>

      <Toolbar>
        <BtnUndo />
        <BtnRedo />
        <Separator />
        <BtnBold />
        <BtnItalic />
        <BtnUnderline />
        <Separator />
        <BtnNumberedList />
        <BtnBulletList />
        <Separator />
        <BtnLink />
      </Toolbar>
    </Editor>
  );
}
