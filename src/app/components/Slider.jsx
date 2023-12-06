"use client"
import React, { useState } from 'react'
import styles from "@/app/styles/slider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>

      <div className="flex flex-col items-center justify-evenly">
      <BsArrowLeftCircleFill onClick={() => nextSlide()} className={`${styles.arrow} ${styles.arrow_left}`} />
      <div className={`${styles.carrusel}`}>
        {data.map((element, idx) => (
          <img
            className={`${slide === idx ? styles.slide : `${styles.slide} ${styles.slide_hidden}`}`}
            key={idx}
            src={element.image}
            alt={`Image ${idx}`}
          />
        ))}
      </div>
      <BsArrowRightCircleFill onClick={() => prevSlide()} className={`${styles.arrow} ${styles.arrow_right}`} />
    </div>



      {/* <span className={styles.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={slide === idx ? `${styles.indicator}` : `${styles.indicator} ${styles.indicator_inactive}`}
              onClick={() => setSlide(idx)}>
            </button>
          );
        })}
      </span> */}
   
    </>
  )
}

export default Slider