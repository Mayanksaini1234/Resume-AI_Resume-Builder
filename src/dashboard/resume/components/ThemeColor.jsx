import React, { useContext, useState } from "react";
import { Button } from "../../../components/ui/button";
import { LayoutGrid } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormPreviewContext } from "../../../context/FormPreviewContext";
import globalAPI from "../../../../service/globalAPI";
import { useParams } from "react-router-dom";
import {toast} from "sonner"
const ThemeColor = () => {
  const { resumeInfo, setResume } = useContext(FormPreviewContext);
  const colors = [
    "#000000",
    "#FF5733", // Vibrant Orange
    "#33FF57", // Vibrant Green
    "#3357FF", // Vibrant Blue
    "#33FFF5", // Aqua
    "#8D33FF", // Purple
    "#FF8633", // Coral
    "#33FFB5", // Mint
    "#FF3333", // Red
  ];
  const Id = useParams();
  const handleColorSelect = (color) => {
    setResume({
      ...resumeInfo,
      themeColor: color,
    });
    const data = {
      data: {
        themeColor: color,
      },
    };
   
    globalAPI.UpdateResume(Id.resumeId , data).then(
      (res) => {
        console.log(res);
        toast("Theme Color is updated!");
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            disabled={!resumeInfo}
          >
            <LayoutGrid className="w-4 h-4" />
            Theme
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 z-50">
          <h1 className="text-sm font-semibold mb-3">Choose the Theme Color</h1>

          <div className="grid grid-cols-3 gap-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer outline-none hover:scale-110 hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-transform duration-200"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ThemeColor;
