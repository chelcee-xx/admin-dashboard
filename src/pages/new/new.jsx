import React, { useState } from "react";
import "./new.scss";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = (props) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{props.title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {props.inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              {/* <div className="formInput">
                <label htmlFor="">Name and surname</label>
                <input type="text" placeholder="John Doe" className="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="john_doe@gmail.com"
                  className=""
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="081 234 5678" className="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" className="" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="123 rihanna avenue"
                  className=""
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="Nigeria" className="" />
              </div> */}
              <button className="">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
