import React, { useEffect } from "react";
import "./profile.css";
import UploadAvatar from "../../components/UploadAvatar";
import Footer from "../../components/footer/Footer";
import useProfileStore from "../../stores/useProfileStore";
import userProfile from "../../assets/img_profile.jpg";
import Sidebar from "./Sidebar";
import Header from "../../components/header/Header";

const Profile = () => {
  const { user, setUser, updateUser, updateUserToApi } = useProfileStore();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [setUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateUser(name, value);
  };

  const handleSubmit = async () => {
    try {
      const updatedUser = await updateUserToApi(user);

      localStorage.setItem("userData", JSON.stringify(updatedUser));

      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row g-4">
          <Sidebar title="Ubah Profil" subtitle="Ubah data diri Anda" />

          <div className="col-12 col-lg-9">
            <div className="avatar d-flex flex-column bg-white border rounded-2 p-4 w-100">
              <div className="d-flex flex-column flex-md-row gap-3 align-items-center">
                <img
                  src={
                    user.avatarUrl
                      ? `http://localhost:5173${user.avatarUrl}`
                      : userProfile
                  }
                  alt={`${user.userName} avatar`}
                  className="img-fluid rounded-circle"
                  style={{ width: "80px", height: "80px" }}
                />
                <div className="text-center text-md-start">
                  <p className="text-black fs-5 fw-semibold m-0">
                    {user.userName}
                  </p>
                  <p className="text-black fs-6 m-0">{user.email}</p>
                  <UploadAvatar
                    token={user.email}
                    userId={user.id}
                    username={user.username}
                    avatarUrl={user.avatarUrl}
                    setIsUserUpdated={() => {}}
                  />
                </div>
              </div>

              <div className="profile-body mt-4 row g-3">
                <div className="col-12 col-md-3">
                  <div className="input-container position-relative">
                    <label className="input-label">Nama Lengkap</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Enter Full Name"
                      className="input-field border"
                      value={user.fullName}
                      onChange={handleInputChange}
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
                      value={user.email}
                      onChange={handleInputChange}
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
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer classFooter="position-absolute bottom-0" />
    </>
  );
};

export default Profile;
