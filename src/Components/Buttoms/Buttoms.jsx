import React from "react";
import Style from "./Buttoms.module.scss";
import { Imagen1 } from "../Images/Images";
import { Icon } from '@iconify/react';

function Buttoms(props) {
  return (
    <div>
      <button className={Style.Btn_o}>
        Ver más
        <Icon icon="bi:arrow-right" color="white" height="24" />
      </button>
    </div>
  );
}

export default Buttoms;
