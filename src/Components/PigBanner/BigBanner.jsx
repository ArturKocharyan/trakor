import React from 'react'
import style from './style.module.css'
import linkPart from '../../asstes/desktop/TopBar.png'
import windowPart from '../../asstes/desktop/Desktop-App-Placeholder-1.png'

function BigBanner() {
    return (
        <div className={style.main_container} >
            <div className={style.content_container} >
                <div className={style.title} ><span>Diam quam tortor eget id.</span>
                    <span>Aliquet lacus volutpat tristique sed diam.</span> </div>
                <div className={style.descktop} >
                    <span className={style.link} ><img src={linkPart} alt='alt' /> </span>
                    <span className={style.windowStyle} ><img src={windowPart} alt='alt' /></span>      
                </div>
            </div>

        </div>
    )
}

export default BigBanner