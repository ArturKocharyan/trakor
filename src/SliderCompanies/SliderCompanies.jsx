import React from 'react'
import style from './style.module.css'

function SliderCompanies() {
  return (
    <div className={style.main_container} >
        <div className={style.content_container}>
            <div className={style.title} >
                <span>Our partners. Our Friends.</span>
                <span>They love us.</span>
            </div>
            <p>Sem malesuada sed lectus id nunc mattis est eget tincidunt.</p>
        </div>
        <div className={style.silder_div} >
            {/* <Slider /> */}
        </div>
    </div>
  )
}

export default SliderCompanies