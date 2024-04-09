import React from "react";
import style from "./style.module.css";

function WorkFaster() {
  return (
    <div className={style.main_container}>
      <div className={style.content_container}>
        <div className={style.first_container}>
          <div className={style.title_container}>
            <span>Control the flow.</span>
            <span>Work faster.</span>
          </div>
          <div className={style.text_container}>
            <p>
              Scelerisque auctor dolor diam tortor, fames faucibus non interdum
              nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
              adipiscing lacinia.
            </p>
          </div>
        </div>
        <div className={style.second_container}></div>
      </div>
    </div>
  );
}

export default WorkFaster;
