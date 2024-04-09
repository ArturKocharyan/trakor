import React, { useState } from "react";
import style from "./style.module.css";

function Slider() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

  const handlePrev = () => {
    setSelectedIndex((selectedIndex + 4) % 5);
  };

  const handleNext = () => {
    setSelectedIndex((selectedIndex + 1) % 5);
  };

  return (
    <div className={style.main_container}>
      <div className={style.sliderContainer}>
        <div className={style.slider}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${style.card} ${
                index === selectedIndex ? style.active : ""
              }`}
              style={{
                transform: `translate(${(index - selectedIndex) * 80}px, ${
                  index === selectedIndex ? "-100px" : "-50px"
                }) scale(${index === selectedIndex ? 1.2 : 1})`,
                zIndex: index === selectedIndex ? 1 : 0
              }}
            >
              {card}
            </div>
          ))}
        </div>
        <div className={style.buttonsContainer}>
          <button className={style.prev} onClick={handlePrev}>
            Prev
          </button>
          <button className={style.next} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
