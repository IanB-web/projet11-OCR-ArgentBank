import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import UserInfoForm from "../../components/partials/userinfoform";

import "./profile.scss";

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
              <button className="edit-button" onClick={handleEdition}>Edit Name</button>
            </>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
