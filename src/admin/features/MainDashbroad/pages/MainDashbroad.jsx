import React, { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import ControlBar from "../components/controlBar";
const MainDashbroad = () => {
  // const { Auth } = useAuth();
  // useEffect(() => {
  //   Auth();
  // }, []);
  return (
    <div className="MainDashbroad">
      <ControlBar />
    </div>
  );
};

export default MainDashbroad;
