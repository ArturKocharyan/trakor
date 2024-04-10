import React from "react";
import style from "./style.module.css";
import pic from '../../asstes/Picture.jpg';
import CustomButton from "../../elements/Button";

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
          <CustomButton backgroundColor="#4F46E5" textColor="white" border='#6366F1' maxWidth='186px' children='Start for free' />
        </div>
        <div className={style.second_container}>
          <img src={pic} alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default WorkFaster;
