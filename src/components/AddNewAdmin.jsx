import React, { useContext, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "/public/logo.png";
import profilePic from "/public/docHolder.webp";
import { MdEdit, MdUpdate } from "react-icons/md";

const AddNewDoctor = () => {
  const { isAuthenticated, url } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigate = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Radiology",
    "Oncology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  // const handleAvatar = async (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setDocAvatarPreview(reader.result);
  //     setDocAvatar(file);
  //   };
  // };
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      formData.append("docAvatarPreview", docAvatarPreview);

      const response = await axios.post(
        "https://hms-backend-czxa.onrender.com/api/v1/user/doctor/addnew",
        // `${url}/api/v1/user/doctor/addnew`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (!isAuthenticated) {
    return navigate("/login");
  }
    const fieldClass =
    "w-full min-w-0 p-3 text-sm sm:text-base text-gray-800 bg-white placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <section className="py-6 sm:py-10 px-4 bg-gray-100">
      <div className="mx-auto w-full max-w-4xl bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <img src={logo} alt="ZeeCare Logo" className="mx-auto w-28 sm:w-40" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
            Register a New Doctor
          </h1>
        </div>

        <form onSubmit={handleAddNewDoctor} className="space-y-6">
          <div className="flex flex-col items-center gap-3">
            <div className="w-28 h-28 sm:w-40 sm:h-40 border-4 border-dashed border-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={docAvatarPreview || profilePic}
                alt="Doctor Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
              <MdEdit size={"1.5rem"} />
              Upload photo
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatar}
                className="hidden"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={fieldClass}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={fieldClass}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={fieldClass}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={fieldClass}
            />
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              className={fieldClass}
            />
            <label className="flex flex-col gap-1 text-sm sm:text-base text-gray-600 min-w-0">
              Date of Birth
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className={fieldClass}
              />
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={`${fieldClass} ${gender ? "" : "text-gray-400"}`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={fieldClass}
            />
            <select
              value={doctorDepartment}
              onChange={(e) => setDoctorDepartment(e.target.value)}
              className={`${fieldClass} ${doctorDepartment ? "" : "text-gray-400"}`}
            >
              <option value="">Select Department</option>
              {departmentsArray.map((element, index) => (
                <option value={element} key={index} className="text-gray-800">
                  {element}
                </option>
              ))}
            </select>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register New Doctor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddNewDoctor;