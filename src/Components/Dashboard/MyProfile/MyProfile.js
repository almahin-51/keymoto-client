import React from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  const handleEditProfile = () => {
    swal("SOON!", "It will be Available very soon!", "info");
  };

  return (
    <div className="profile">
      <div className="my-profile">
        <h4 className="fw-bold text-center my-3 text-red">My Profile</h4>
        <div className="my-profile-pic">
          {user.photoURL ? (
            <img
              className="img-fluid rounded-circle"
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <div
              style={{ width: "80px", height: "80px", fontSize: "40px" }}
              className="menu-name"
            >
              {user?.email?.slice(0, 1)}
            </div>
          )}
        </div>
        <div>
          <h5 className="m-0 pt-3">{user.displayName}</h5>
          <p>{user.email}</p>
          <Button
            onClick={handleEditProfile}
            className="my-btn text-black mt-3 "
          >
            EDIT PROFILE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
