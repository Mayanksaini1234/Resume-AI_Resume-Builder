import { Loader, MoreVertical } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import globalAPI from "../../../service/globalAPI";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";
const ResumeList = ({ resume, refreshData }) => {
  const [deleteHandle, setDeleteHadle] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
console.log(resume.documentId)
  const deleteResume = () => { 
    setLoader(true);
    globalAPI.deleteResume(resume.documentId).then(
      (res) => {
        // console.log(res);
        toast("Resume Deleted!");
        setLoader(false);
        refreshData();
        setDeleteHadle(false);
      },
      (err) => {
        console.log(err);
        setLoader(false);
        toast("Resume can't Deleted and there is an error!");
      }
    );
  };
  return (
    <div className="group relative w-full sm:w-[260px] max-w-full">
      <div className="border-2 border-dashed border-gray-300 bg-gradient-to-br from-pink-100 via-blue-50 to-amber-50 p-5 rounded-xl h-[260px] flex flex-col justify-center items-center transition-all duration-300 hover:shadow-xl hover:scale-[1.04] hover:border-rose-400">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200 hover:shadow"
              aria-label="Options"
            >
              <MoreVertical className="text-gray-600" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                navigate(`/myresume/${resume.documentId}/view`);
              }}
            >
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigate(`/dashboard/resume/${resume.documentId}/edit`);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigate(`/myresume/${resume.documentId}/view`);
              }}
            >
              Download
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigate(`/myresume/${resume.documentId}/view`);
              }}
            >
              Share
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDeleteHadle(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialog open={deleteHandle}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                resume.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDeleteHadle(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteResume();
                }}
                disabled={loader}
              >
                {loader ? <Loader className="animate-spin " /> : "Continue"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <img
          src="/resume.png"
          alt="Resume Preview"
          className="w-full rounded-md"
        />
      </div>

      <h1 className="text-center mt-4 text-lg font-semibold text-gray-700 group-hover:text-primary transition-colors">
        {resume.title}
      </h1>
    </div>
  );
};

export default ResumeList;
