import React from "react";
import AccountSetting from "./AccountSetting";
import SideBar from "./SideBar";

export default function Users() {
  return (
    <div className="container-fluid my-4">
      <div
        className="row justify-content-center"
        style={{ margin: "0px auto" }}
      >
        <div className="col-11 col-md-2">
          <SideBar />
        </div>
        <div className="col-11 col-md-8">
          <AccountSetting />
        </div>
      </div>
    </div>
  );
}
