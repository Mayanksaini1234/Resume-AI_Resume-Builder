import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import ResumeList from "./components/ResumeList";
import globalAPI from "../../service/globalAPI";
import { useUser } from "@clerk/clerk-react";
const Dashboard = () => {
  const { user } = useUser();
  const [getResume, setResume] = useState([]);

  useEffect(() => {
    user && getUserData();
  }, [user]);

  // why we wrap it in a arrow fn + using the useEffect ,because in case if user just log out and login with diff email id then it should work smoothly.

  const getUserData = () => {
    globalAPI.getResume(user?.primaryEmailAddress?.emailAddress).then(
      (res) => {
        setResume(res.data.data);
        console.log(res.data.data);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div className="p-15 ">
      <h1 className="font-bold text-3xl"> My Resume</h1>
      <p className="">Create an AI-powered resume for your next dream job.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
        <AddResume />
        {/* comp1 */}
        {getResume.length > 0
          ? getResume.map(
              (resume, index) => {
                return (
                  <ResumeList
                    resume={resume}
                    key={index}
                    refreshData={getUserData}
                  />
                );
              }

              // comp2
            )
          : [1, 2, 3].map((item, index) => {
              return (
                <div className="group relative w-full sm:w-[260px] max-w-full rounded-lg bg-slate-200 animate-pulse"></div>
              );
            })}
      </div>
    </div>
  );
};

export default Dashboard;
