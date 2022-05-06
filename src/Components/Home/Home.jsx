import { Grid } from "@nextui-org/react";
import React from "react";
import Topics from "../Topics/Topics";
import Style from "./Home.module.scss";
import banner from "../Images/Intersect.png";
import { Iconos } from "Components/Images/Images";

function Home(props) {
  return (
    <Grid.Container gap={0} justify="center" className={Style.Home}>
      <Grid xs={10} md={3} className={Style.Home_Skills}>
        <p>
          Hola, mi nombre es Angie, aquí te dejo un poco de mi creatividad,
          proyectos y mi visión como artista digital.
        </p>
        <Topics
          title="UX"
          description="scelerisque enim interdum nunc imperdiet. Ipsum cursus placerat nisi"
          to="/UX"
        />
        <Topics
          title="UI"
          description="scelerisque enim interdum nunc imperdiet. Ipsum cursus placerat nisi"
          to="/UI"
        />
        <Topics
          title="Developer"
          to="/Developer"
          description="scelerisque enim interdum nunc imperdiet. Ipsum cursus placerat nisi"
        />
        <Topics
          title="Retoque Artístico"
          to="/Retoque"
          description="scelerisque enim interdum nunc imperdiet. Ipsum cursus placerat nisi"
        />
      </Grid>
      <Grid xs={6} className={Style.Home_banner}>
        <img src={banner} alt="" />
      </Grid>
      <Grid xs={3} className={Style.Home_apps}>
        <div className={Style.apps_container}>
          {Iconos.map((Icono, Index) => {
            return <img key={Index} src={Icono} alt={"Icono" + Index} />;
          })}
        </div>
      </Grid>
    </Grid.Container>
  );
}

export default Home;
