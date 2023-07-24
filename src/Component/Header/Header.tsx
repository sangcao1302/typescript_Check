import React, { SyntheticEvent, useRef, useEffect, ReactEventHandler } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useOnClickOutside } from "usehooks-ts";
import { url } from "inspector";
import { TextField, colors } from "@mui/material";
import { TabRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../Redux/configStore";
import { LocationModel, getLocationApi } from "../../Redux/reducers/location";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import moment from "moment";
import { DatePicker } from "antd";
type Props = {};

export default function Header({}: Props) {
  const [value, setValue] = React.useState("1");
  const [location,setLocation]=React.useState("")
  // const [idLocation,setIdLocation]=React.useState("")
//  console.log(location)
 
  const [dates, setDates] = React.useState([]);
  const [display, setDisPlay] = React.useState("none");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const { arrLocation } = useSelector((state: RootState) => state.location);
  const dispatch: DispatchType = useDispatch();
  const handleClick = (
    // When passing a union as a type parameter,
    // you can provide type-safety to a more
    // abstract handlers:
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ): void => {
    e.preventDefault();

    setDisPlay("");
  };

  const ref = useRef(null);
  const handleClickOutside = () => {
    setDisPlay("none");
  };
  useOnClickOutside(ref, handleClickOutside);
  const getLocationList = () => {
    const action = getLocationApi();
    dispatch(action);
  };
  const handleLocation=(e:React.ChangeEvent<HTMLInputElement>)=>{
    arrLocation?.map((item:any)=>{
      if(e.target.value===item.tinhThanh){
        return setLocation(item.id)
      }
    })
  }
  useEffect(() => {
    getLocationList();
    
  }, []);
  // const handleSelect=(e:React.MouseEvent<HTMLOptionElement>):void=>{
  //   console.log(value)
  //   setLocation(value)
  // }
 
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: `url("./assets/image/background.jpg")`,
        minHeight: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-2 col-sm-2 col-md-2">
          <div className="logo w-100  mx-5">
            <img
              src="./assets/image/logo.png"
              style={{ maxWidth: "60%" }}
              alt=""
            />
          </div>
        </div>
        <div className="col-6 col-sm-6 col-md-6">
          <div className="dropDown mt-4 text-center">
            <button
              className="btn-click btn-outline-light text-white  rounded-pill"
              style={{
                padding: "10px",
                boxShadow: "-2px 1px #EDEDED",
                marginLeft: "35%",
                border: "none",
                backgroundColor: "transparent",
              }}
              ref={ref}
              onClick={handleClick || handleClickOutside}
            >
              <span className="mx-2">Địa điểm bất kì</span>
              <span className="mx-2">Tuần bất kì</span>
              <span className="mx-2">Thêm khách</span>
              <span className="mx-2">
                <i className="fab fa-sistrix" />
              </span>
            </button>
            <div
              className="tab w-100"
              ref={ref}
              style={{
                display: `${display}`,
                marginLeft: "16%",
              }}
            >
              <ul
                className="nav nav-tabs rounded-pill p-2 "
                id="myTab"
                role="tablist"
                style={{ backgroundColor: "#EBEBEB", maxWidth: "100%" }}
              >
                <div className="row">
                  <div className="col-3 col-md-3 col-sm-3">
                    <li className="nav-item p-2" role="presentation">
                      <button
                        className="nav-link active  rounded-pill text-start text-dark"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <span>Địa điểm</span>
                        <br />

                        <input
                    
                          list="browsers"
                          id="browser"
                          style={{
                            border: "none",
                            outline: "none",
                            maxWidth: "140px",
                            backgroundColor: "transparent",
                          }}
                          onChange={handleLocation}
                          placeholder="Search place"
                        />

                        <datalist id="browsers">
                          {arrLocation?.map((item: LocationModel) => {
                            return (
                              <option
                                
                                key={item.id}
                              >{item.tinhThanh}</option>
                            );
                          })}
                        </datalist>
                      </button>
                    </li>
                  </div>
                  <div
                    className="col-3 col-md-3 col-sm-3"
                    style={{ position: "relative" }}
                  >
                    <li className="nav-item mt-2" role="presentation">
                      <button
                        className="nav-link  rounded-pill text-start text-dark"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <span>Nhận phòng</span>
                        <br />
                        <input
                          name="checkIn"
                          type="date"
                          id="checkInDate"
                          className="bg-transparent outline-none"
                          placeholder="Thêm ngày"
                        />
                      </button>
                    </li>
                  </div>
                  <div className="col-3 col-md-3 col-sm-3">
                    <li className="nav-item mt-2" role="presentation">
                      <button
                        className="nav-link   rounded-pill text-start text-dark"
                        id="messages-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#messages"
                        type="button"
                        role="tab"
                        aria-controls="messages"
                        aria-selected="false"
                      >
                        <span>Trả phòng</span>
                        <br />
                        {/* <input
                            type="text"
                            style={{
                              border: "none",
                              outline: "none",
                              maxWidth: "140px",
                              backgroundColor: "transparent",
                            }}
                          /> */}

                        <input
                          name="checkIn"
                          type="date"
                          id="checkInDate"
                          className="bg-transparent outline-none"
                          placeholder="Thêm ngày"
                        />
                      </button>
                    </li>
                  </div>
                  <div className="col-3 col-md-3 col-sm-3">
                    <li className="nav-item mt-2" role="presentation">
                      <button
                        className="nav-link rounded-pill text-start text-dark w-75"
                        id="person-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#person"
                        type="button"
                        role="tab"
                        aria-controls="person"
                        aria-selected="false"
                      >
                        <div className="row">
                          <div className="col-6 col-sm-6 col-md-6">
                            <label htmlFor="">Khách</label>
                            <input
                              type="text"
                              style={{
                                border: "none",
                                outline: "none",
                                maxWidth: "140px",
                                backgroundColor: "transparent",
                              }}
                            />
                          </div>
                          <div className="col-6 col-sm-6 col-md-6">
                            <NavLink
                              className="rounded-circle mx-4 mt-2 border-0"
                              style={{
                                backgroundImage:
                                  "radial-gradient(circle at center,#ff385c 0%,#e61e4d 27.5%,#e31c5f 40%,#d70466 57.5%,#bd1e59 75%,#bd1e59 100%)",
                                width: "50px",
                                height: "50px",
                              }}
                              to={`/list/${location}`}
                            >
                              <i className="fab fa-sistrix text-white fs-6" style={{width:"50px"}}></i>
                            </NavLink>
                          </div>
                        </div>
                      </button>
                    </li>
                  </div>
                </div>
              </ul>
              
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-4 col-md-4 mb-2">
          <div className="user-action d-flex" style={{ padding: "6% 0 0 39%" }}>
            <h5 className="fs-6 text-white mx-2">Trở thành chủ nhà</h5>
            <i className="fa fa-globe mx-3 mt-1" style={{ color: "white" }} />
            <div className="dropdown-center mb-2" style={{position:"relative"}}>
              <button className="btn btn-secondary border-0 text-white d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{ backgroundColor: "transparent" }}>
                <i className="fa fa-align-justify mx-2 text-white" />
                <i className="fa fa-user-circle mx-2 text-white" />
              </button>
              <ul className="dropdown-menu dropdown-menu-right" style={{position:"absolute",right:"0"}}>
                <li><NavLink to={"/login"} className="text-decoration-none text-black mx-2">Đăng nhập</NavLink></li>
                <li><NavLink to={"/register"} className="text-decoration-none text-black mx-2">Đăng ký</NavLink></li>
                <li><NavLink to={"/profile"} className="text-decoration-none text-black mx-2">Profile</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
