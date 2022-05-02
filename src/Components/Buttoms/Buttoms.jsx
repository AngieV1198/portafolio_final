import React from "react";
import Style from "./Buttoms.module.scss";
import { Imagen1 } from "../Images/Images";

function Buttoms(props) {
  return (
    <div>
      <button className={Style.Btn_o}>
        Ver más
        <img src={Imagen1} className={Style.Img_o}/>
      </button>
    </div>
  );
}

export default Buttoms;
