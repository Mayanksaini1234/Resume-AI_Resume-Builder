import React, { useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import globalAPI from "../../../service/globalAPI";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [OpenDialogue, SetDialouge] = useState(false);
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const createResume = async () => {
    setLoader(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title,
        uuid,
        userName: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      },
    };

    globalAPI.createResume(data).then(
      (res) => {
        console.log(res.data.data.documentId);
        if (res) {
          setLoader(false);
          navigate("/dashboard/resume/" + res.data.data.documentId + "/edit");
        }
      },
      (err) => {
        console.log(err);
        setLoader(false);
      }
    );
  };
  return (
    <div>
      <div className="group relative w-full sm:w-[260px] max-w-full">
        <div
          className="border-2 border-dashed border-gray-300 bg-gradient-to-br from-gray-50 to-gray-100 p-10 flex flex-col justify-center items-center rounded-xl h-[260px] transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] cursor-pointer"
          onClick={() => SetDialouge(true)}
        >
          <PlusSquare />
        </div>
      </div>
      <Dialog open={OpenDialogue}>
        <DialogContent>
          <DialogTitle>Create New Resume</DialogTitle>
          <DialogDescription>
            Add title for your new Resume
            <Input
              className="mt-5"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex-FullStack Developer..."
            />
          </DialogDescription>
          <div className="flex justify-end gap-5 items-center ">
            <Button variant="Ghost" onClick={() => SetDialouge(false)}>
              Cancel
            </Button>

            <Button disabled={!title || loader} onClick={createResume}>
              {loader ? <Loader2 className="animate-spin" /> : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
