import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY;

const axiosClient = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    // baseURL: "http://localhost:1337/api/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    }
})

const createResume = (data) => axiosClient.post("user-resumes1s", data);
const getResume = (userEmail) => axiosClient.get('user-resumes1s?filters[userEmail][$eq]=' + userEmail);
const UpdateResume = (id, data) => axiosClient.put("user-resumes1s/" + id, data)
const getResumeById = (id) =>
    axiosClient.get(
      `user-resumes1s/${id}?populate[skills1][populate]=skillName&populate[education]=*&populate[experience]=*&populate[project]=*&populate[certificate]=*&populate[responsibility]=*&populate[Hobbies]=*`
    );
  const deleteResume = (id) => axiosClient.delete("user-resumes1s/" + id)
export default {
    createResume,
    getResume,
    UpdateResume,
    getResumeById,
    deleteResume
}

