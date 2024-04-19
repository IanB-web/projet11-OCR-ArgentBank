import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import UserInfoForm from "../../components/partials/userinfoform";

import "./profile.scss";
import Account from "../../components/partials/account";

const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [edition, setEdition] = useState(false);
  const handleEdition = () => {
    setEdition(true);
  };

  return (
    <>
      <Header />

      <main className="main bg-dark">
        <div className="header">
          {edition ? (
            <UserInfoForm
              setEdition={setEdition}
              userName={userInfo.userName}
              lastName={userInfo.lastName}
              firstName={userInfo.firstName}
            />
          ) : (
            <>
              <h1>
                Welcome back <br />
                {userInfo.userName}
              </h1>
              <button className="edit-button" onClick={handleEdition}>
                Edit Name
              </button>
            </>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>
        <Account
          accountTitle="Argent Bank Checking (x8349)"
          amoutValue="$2,082.79"
          accountDescription="Available Balance"
        />
        <Account
          accountTitle="Argent Bank Savings (x6712)"
          amoutValue="$10,928.42"
          accountDescription="Available Balance"
        />
        <Account
          accountTitle="Argent Bank Credit Card (x8349)"
          amoutValue="$184.30"
          accountDescription="Current Balance"
        />
      </main>

      <Footer />
    </>
  );
};

export default Profile;
