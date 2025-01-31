import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserData,
  deleteUserData,
  logout,
} from "../../store/redux/user/userActions";
import "./profile.css";
import UploadAvatar from "./UploadAvatar";
import Footer from "../../components/footer/Footer";
import Sidebar from "./Sidebar";
import Header from "../../components/header/Header";
import userProfile from "../../assets/avatar/img_profile.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  console.log(user);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    userName: user?.userName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const updateUser = {
        ...user,
        ...formData,
      };
      dispatch(updateUserData(updateUser));
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile. Please try again later.");
    }
  };

  const handleDelete = async () => {
    try {
      const deleteUser = {
        ...user,
        ...formData,
      };

      const resultAction = await dispatch(deleteUserData(deleteUser));

      if (deleteUserData.fulfilled.match(resultAction)) {
        alert("Profile deleted successfully!");

        dispatch(logout());
        navigate("/");
      } else {
        const errorMessage =
          resultAction.payload || "Failed to delete profile.";
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error deleting profile:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container my-4">
        <div className="row g-4">
          <Sidebar title="Ubah Profil" subtitle="Ubah data diri Anda" />

          <div className="col-12 col-lg-9">
            <div className="avatar d-flex flex-column bg-white border rounded-2 p-4 w-100">
              <div className="d-flex flex-column flex-md-row gap-3 align-items-center">
                <img
                  src={
                    user?.avatarUrl
                      ? `http://localhost:5173${user.avatarUrl}`
                      : userProfile
                  }
                  alt={`${user?.userName || "User"} avatar`}
                  className="img-fluid rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="text-center text-md-start">
                  <p className="text-black fs-5 fw-semibold m-0">
                    {user?.userName || "Unknown User"}
                  </p>
                  <p className="text-black fs-6 m-0">
                    {user?.email || "Unknown Email"}
                  </p>
                  <UploadAvatar
                    token={user?.email}
                    userId={user?.id}
                    username={formData?.userName}
                    avatarUrl={user?.avatarUrl}
                    setIsUserUpdated={() => {}}
                  />
                </div>
              </div>

              {loading && <p>Loading...</p>}
              {error && <p className="text-danger">{error}</p>}
              <form
                id="profile"
                name="profile"
                onSubmit={handleSubmit}
                onKeyDown={handleEnterPress}
              >
                <div className="profile-body mt-4 row g-3">
                  <div className="col-12 col-md-3">
                    <div className="input-container position-relative">
                      <label className="input-label">Nama Lengkap</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Enter Fullname"
                        className="input-field border"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-3">
                    <div className="input-container position-relative">
                      <label className="input-label">Username</label>
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Enter Username"
                        className="input-field border"
                        value={formData.userName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="input-container position-relative">
                      <label className="input-label">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="input-field border"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-2">
                    <div className="input-field border rounded-3 d-flex flex-row justify-content-between align-items-center px-3 w-100">
                      <div className="text-secondary fw-semibold">+62</div>
                      <i className="fa-solid fa-chevron-down text-secondary"></i>
                    </div>
                  </div>

                  <div className="col-12 col-md-3">
                    <div className="input-container position-relative">
                      <label className="input-label">No. HP</label>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Enter Phone Number"
                        className="input-field border"
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-4">
                  <button
                    className="btn btn-primary p-2 px-4 rounded fw-semibold"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Simpan"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <button
            className="btn btn-danger p-2  w-25  rounded fw-semibold"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Menghapus..." : "Menghapus Akun"}
          </button>
        </div>
      </div>
      <Footer classFooter="mt-auto" />
    </div>
  );
};

export default Profile;
