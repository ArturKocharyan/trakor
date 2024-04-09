import React from 'react'
import style from './style.module.css'
import Desktop from '../../asstes/Desktop.png'

function BigBanner() {
    return (
        <div className={style.main_container} >
            <div className={style.content_container} >
                <div className={style.title} ><span>Diam quam tortor eget id.</span>
                    <span>Aliquet lacus volutpat tristique sed diam.</span> </div>
                <div>
                    <span className={style.image_span} >
                        <img src={Desktop}  alt='dasktop' />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default BigBanner