import React from "react";
import Buttoms from "../Buttoms/Buttoms";
import Icons from "../Icons/Icons";
import Topics from "../Topics/Topics";
import Style from './Home.module.scss';

function Home(props) {
  return (
    <div className={Style.Content}>
        <h1>Diseñadora UI/UX</h1>

        <Topics
        description="Mi nombre es Angie ¡Bienvenida/o!
        aquí te dejo un poco de mi creatividad y mi visión como artista digital."
      />

      <Topics
        title="UX"
        description="scelerisque enim interdum nunc imperdiet. Ipsum cursus placerat nisi, at sed neque tincidunt."
      />
      <Buttoms />

      <Topics
        title="UI"
        description="scelerisque enim interdum nunc imperdiet. Ipsum cursus placerat nisi, at sed neque tincidunt."
      />
      <Buttoms />

      <Topics
        title="Retoque Artistico"
        description="scelerisque enim interdum nunc imperdiet. Ipsum cursus placerat nisi, at sed neque tincidunt."
      />
      <Buttoms />
      <Icons />
    </div>
  );
}

export default Home;
