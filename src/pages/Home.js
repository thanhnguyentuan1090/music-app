import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <Link to={"/nhac-tre"} className="linknhac">Nhac tre</Link>
      <Link to={"/rapviet"} className="linknhac">Rap Viet</Link>
      <Link to={"/nhac-trinh"} className="linknhac">Nhac trinh</Link>
      <Link to={"/pop"} className="linknhac">Nhac Pop</Link>
      <Link to={"/E-D"} className="linknhac">Nhac electronic</Link>
      <Link to={"/Rap"} className="linknhac">Nhac Rap</Link>
      <Link to={"/Jazz"} className="linknhac">Nhac Jazz</Link>
      <Link to={"/Coutry"} className="linknhac">Nhac Coutry</Link>
      <Link to={"/latin"} className="linknhac">Nhac Latin</Link>
      <Link to={"/japan"} className="linknhac">Nhac Japan</Link>
      <Link to={"/korea"} className="linknhac">Nhac Korea</Link>
      <Link to={"/koloi"} className="linknhac">Nhac KO loi</Link>
    </div>
  );
}

export default Home;
