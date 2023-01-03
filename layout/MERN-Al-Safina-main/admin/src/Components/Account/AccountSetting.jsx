import React, { useState } from "react";
import LoadingSpinner from "../Shared/spinner";

function AccountSetting() {
  const [isLoading, setIsLoading] = useState("");

  return (
    <div className="border p-2 rounded">
      {isLoading && <LoadingSpinner asOverlay />}
      <div>
        <h5>Account Setting</h5>
        <form>
          <div class="form-group mb-3">
            <label for="password">New Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <div class="form-group mb-3">
            <label for="cpassword">Confirm New Password</label>
            <input
              type="password"
              class="form-control"
              id="cpassword"
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountSetting;
