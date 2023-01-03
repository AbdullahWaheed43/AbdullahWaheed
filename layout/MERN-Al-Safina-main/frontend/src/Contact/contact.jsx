import React from "react";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center my-5">
        <div className="border rounded col-8">
          <h4 style={{ color: "rgb(254, 145, 38)" }}>Contact Us</h4>
          <form className="row">
            <div className="col-12 col-md-5">
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  id="message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "rgb(254, 145, 38)",width:'min-content' }}
              className="btn text-white mb-3 ms-3"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
