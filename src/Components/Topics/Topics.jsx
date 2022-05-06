import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import Style from "./Topics.module.scss";

function Topics({ title, description, to}) {
  return (
    <div className={Style.Topics}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={to}>
        <Button
          size={"sm"}
          css={{ bgColor: "#0085FF" }}
          rounded
          iconRight={<Icon icon="bi:arrow-right" color="white" height="24" />}
        >
          Ver más
        </Button>
      </Link>
    </div>
  );
}

export default Topics;
