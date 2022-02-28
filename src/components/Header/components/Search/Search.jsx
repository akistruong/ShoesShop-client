import React, { useRef, useState, useEffect } from "react";
import "./Search.css";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import { Input } from "antd";

const UseOutsideAlerter = (ref, open, setOpen) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(!open);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
const SearchOpen = ({ open, setOpen }) => {
  const SearchRef = useRef();
  const [openResult, setOpenResult] = useState(false);
  UseOutsideAlerter(SearchRef, open, setOpen);
  return (
    <>
      <div className="Search__open" ref={SearchRef}>
        <div className="SearchOpen__logo LOGO">THESHOES</div>
        <div className="SearchOpen__Search">
          <input className="Search__input" placeholder="Search" />
          <SearchOutlined className="Search__icon--search" />
        </div>
        <CloseOutlined
          className="Search__icon--close"
          onClick={() => setOpen(!open)}
          style={{ fontSize: "5px" }}
        />
        {openResult && <div className="Search__result">THIS IS RESULT</div>}
      </div>
    </>
  );
};

const SearchComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="SearchComponent">
      <SearchOutlined onClick={handleClick} />
      {open && <SearchOpen open={open} setOpen={setOpen} />}
    </div>
  );
};
export default SearchComponent;
