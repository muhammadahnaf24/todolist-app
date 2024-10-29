import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { logout } from "../services/authService"; // Sesuaikan path jika diperlukan

const Profile = () => {
  const user = {
    name: "Muhammad Ahnaf",
    email: "ahnaf@gmail.com",
    phone: "+62 456 7890",
    address: "Indonesia",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhzGPvlzP3hRyDnhtVEDcly8tqf6UTpOFeFYlDKlUciISY01q7kvUIO0Fan2Eeg-3Y4E&usqp=CAU",
  };

  const handleLogout = () => {
    logout(); // Panggil fungsi logout dari authService
    // Tambahkan logika untuk mengalihkan pengguna ke halaman login atau beranda setelah logout
    window.location.href = "/login"; // Ganti dengan rute yang sesuai
  };

  return (
    <div className="p-6 flex flex-col items-center bg-gray-50 min-h-screen">
      <div className="relative w-32 h-32">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-full h-full rounded-full shadow-lg mb-4 transition-transform transform hover:scale-105"
        />
        <span className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 border-2 border-white rounded-full"></span>
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-1">{user.name}</h2>
      <p className="text-gray-500 mb-4">{user.email}</p>
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-auto mt-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          User Details
        </h3>
        <div className="flex items-center mb-3">
          <FaPhoneAlt className="text-yellow-500 mr-2" />
          <p className="text-gray-700">
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
        <div className="flex items-center mb-3">
          <FaEnvelope className="text-yellow-500 mr-2" />
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <div className="flex items-center mb-3">
          <FaMapMarkerAlt className="text-yellow-500 mr-2" />
          <p className="text-gray-700">
            <strong>Address:</strong> {user.address}
          </p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
