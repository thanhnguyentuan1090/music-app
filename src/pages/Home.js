import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/MusicList.css"

function Home() {
  return (
    <div className="home">
      <Link to={"/nhac-tre"} className="linknhac nhactre">Nhac tre</Link>
      <Link to={"/rapviet"} className="linknhac rapviet">Rap Viet</Link>
      <Link to={"/nhac-trinh"} className="linknhac nhactrinh">Nhac trinh</Link>
      <Link to={"/pop"} className="linknhac pop">Nhac Pop</Link>
      <Link to={"/E-D"} className="linknhac elec">Nhac electronic</Link>
      <Link to={"/Rap"} className="linknhac rap">Nhac Rap</Link>
      <Link to={"/Jazz"} className="linknhac jazz">Nhac Jazz</Link>
      <Link to={"/Coutry"} className="linknhac coutry">Nhac Coutry</Link>
      <Link to={"/latin"} className="linknhac latin">Nhac Latin</Link>
      <Link to={"/japan"} className="linknhac japan">Nhac Japan</Link>
      <Link to={"/korea"} className="linknhac korea">Nhac Korea</Link>
      <Link to={"/koloi"} className="linknhac koloi">Nhac KO loi</Link>
    </div>
  );
}

export default Home;
