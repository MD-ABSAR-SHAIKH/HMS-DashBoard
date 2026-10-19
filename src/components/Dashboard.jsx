import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { isAuthenticated } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    try {
      const { data } = await axios.get(
        "https://hms-backend-czxa.onrender.com/api/v1/appointment/getall",
        { withCredentials: true }
      );
      setAppointments(data.appointments);
    } catch (error) {
      console.log("some error occured while fetching appointments", error);
    }
  };

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `https://hms-backend-czxa.onrender.com/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
    fetchAppointments();
  }, []);

  const statusSelect = (appointment) => (
    <select
      value={appointment.status}
      className="w-full md:w-auto text-gray-800 bg-gray-100 rounded p-1 text-sm sm:text-base"
      onChange={(e) => handleUpdateStatus(appointment._id, e.target.value)}
    >
      <option value="Pending">Pending</option>
      <option value="Accepted">Accepted</option>
      <option value="Rejected">Rejected</option>
    </select>
  );

  const visitedIcon = (appointment) =>
    appointment.hasVisited ? (
      <GoCheckCircleFill className="text-green-500 text-xl" />
    ) : (
      <AiFillCloseCircle className="text-red-500 text-xl" />
    );

  const doctorName = (appointment) =>
    `${appointment.doctor?.firstName || ""} ${appointment.doctor?.lastName || ""}`;

  return (
    <div className="w-full overflow-x-hidden bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      {/* Section 1: Overview */}
      <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-4 sm:p-6 gap-6 mb-6 sm:mb-8">
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 text-center sm:text-left">
          <img
            src="/doc.png"
            alt="Doctor"
            className="h-28 w-28 sm:h-36 sm:w-36 lg:h-44 lg:w-44 shrink-0 rounded-full border-4 border-blue-500 object-cover"
          />
          <div className="min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Hello, Aasu Shaikh
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt qui
              dolorum eos iste placeat veritatis eum exercitationem.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 items-center text-center">
          <div>
            <h2 className="text-sm sm:text-lg lg:text-xl text-gray-600">
              Total Appointments
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-gray-800">1500</p>
          </div>
          <div>
            <h2 className="text-sm sm:text-lg lg:text-xl text-gray-600">
              Registered Doctors
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-gray-800">20</p>
          </div>
        </div>
      </div>

      {/* Section 2: Appointments */}
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
        Appointments
      </h1>

      {/* Phone: cards */}
      <div className="md:hidden flex flex-col gap-4">
        {appointments && appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white shadow-md rounded-lg p-4 text-sm text-gray-800"
            >
              <div className="flex justify-between items-start gap-3">
                <p className="font-semibold text-base break-words">
                  {appointment.firstName} {appointment.lastName}
                </p>
                {visitedIcon(appointment)}
              </div>
              <div className="mt-2 grid grid-cols-[auto,1fr] gap-x-3 gap-y-1">
                <span className="text-gray-500">Date</span>
                <span className="break-words">{appointment.appointment_date}</span>
                <span className="text-gray-500">Doctor</span>
                <span className="break-words">{doctorName(appointment)}</span>
                <span className="text-gray-500">Department</span>
                <span className="break-words">{appointment.department}</span>
              </div>
              <div className="mt-3">{statusSelect(appointment)}</div>
            </div>
          ))
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6 text-center text-gray-800">
            Appointment Not Found
          </div>
        )}
      </div>

      {/* Tablet and up: table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              {["Patient", "Date", "Doctor", "Department", "Status", "Visited"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-3 lg:px-6 py-3 lg:py-4 text-left text-sm lg:text-base text-gray-600 font-medium whitespace-nowrap"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id} className="border-b">
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base text-gray-800">
                    {appointment.firstName} {appointment.lastName}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base text-gray-800 whitespace-nowrap">
                    {appointment.appointment_date}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base text-gray-800">
                    {doctorName(appointment)}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4 text-sm lg:text-base text-gray-800">
                    {appointment.department}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4">
                    {statusSelect(appointment)}
                  </td>
                  <td className="px-3 lg:px-6 py-3 lg:py-4">
                    <div className="flex justify-center">
                      {visitedIcon(appointment)}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-800">
                  Appointment Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;