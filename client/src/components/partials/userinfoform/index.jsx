import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleStatusMessage } from "../../../features/userSlice";
import { updateUserName } from "../../../features/thunks/userThunks";
import { getStorage } from "../../hooks/getStorage";

import "./userinfoform.scss";

const UserInfoForm = ({ setEdition, userName, lastName, firstName }) => {
  const statusMessage = useSelector((state) => state.user.statusMessage);
  const [newUserName, setNewUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const token = storage.getItem("token");
    if (newUserName !== userName && newUserName !== "") {
      setErrorMessage("");
      dispatch(updateUserName({ newUserName, token }));
    } else {
      setErrorMessage("Please set a valid new user name.");
    }
  };

  useEffect(() => {
    if (statusMessage) {
      setTimeout(() => {
        dispatch(handleStatusMessage());
        setEdition(false);
      }, 2000);
    }
  }, [dispatch, statusMessage, setEdition]);

  return (
    <form className="editinfo__form" onSubmit={handleSubmit}>

      <div className="editinfo__input">
        <label htmlFor="username">User name :</label>
        <input type="text" id="username" placeholder={userName} value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>
      </div>

      <div className="editinfo__input">
        <label htmlFor="firstname">First name :</label>
        <input type="text" id="firstname" placeholder={firstName} disabled />
      </div>

      <div className="editinfo__input">
        <label htmlFor="lastname">Last name :</label>
        <input type="text" id="lastname" placeholder={lastName} disabled />
      </div>

      <div className="editinfo__btns">
        <button type="submit" className="edit-button">Save</button>
        <button className="edit-button" onClick={() => setEdition(false)}>Cancel</button>
      </div>

        {errorMessage && <p className="error--message">{errorMessage}</p>}
        {statusMessage}

    </form>
  );
};

export default UserInfoForm;
